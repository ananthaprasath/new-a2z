import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpring, animated } from "@react-spring/web"; // For animations

const NoPage = () => {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [showRules, setShowRules] = useState(true);
  const [level, setLevel] = useState(1);
  const [prevLevel, setPrevLevel] = useState(1); // For managing level-up toasts
  const [gameOver, setGameOver] = useState(false); // For the end-game message

  const containerWidth = 400;
  const containerHeight = 600;

  // Adjust star spawn interval and speed based on the level
  const spawnInterval = Math.max(2000 - level * 200, 800);
  const starSpeed = Math.min(level * 0.5, 3); // Speed increases but capped at 3
  const starSize = Math.max(30 - level * 2, 15); // Size decreases but minimum is 15px

  // Animation for game over message
  const gameOverAnimation = useSpring({
    opacity: gameOver ? 1 : 0,
    transform: gameOver ? "translateY(0px)" : "translateY(-50px)",
    config: { duration: 1000 },
  });

  // Generate a new star
  const generateStar = useCallback(() => {
    const id = Math.random().toString(36).substring(2, 9);
    const newStar = {
      id,
      x: Math.floor(Math.random() * (containerWidth - starSize)), // Adjust x-position to account for size
      y: 0,
      speed: Math.random() * 1 + starSpeed,
    };
    setStars((prevStars) => [...prevStars, newStar]);
  }, [starSpeed, starSize]);

  // Move stars downward
  useEffect(() => {
    if (!showRules && !gameOver) {
      const interval = setInterval(() => {
        setStars((prevStars) =>
          prevStars.map((star) => ({ ...star, y: star.y + star.speed }))
        );
      }, 20);
      return () => clearInterval(interval);
    }
  }, [showRules, gameOver]);

  // Generate stars at intervals
  useEffect(() => {
    if (!showRules && !gameOver) {
      const interval = setInterval(generateStar, spawnInterval);
      return () => clearInterval(interval);
    }
  }, [showRules, gameOver, spawnInterval, generateStar]);

  // Play sounds with enforced 50% volume
  const playSound = useCallback((soundPath) => {
    import(`../image/${soundPath}`).then((module) => {
      const sound = new Audio(module.default);
      sound.volume = 0.5; // Force volume to 50%
      sound.play();
    });
  }, []);

  // Handle missed stars
  useEffect(() => {
    const missedStars = stars.filter((star) => star.y >= containerHeight);
    if (missedStars.length > 0) {
      setMissed((prevMissed) => prevMissed + missedStars.length);
      setStars((prevStars) =>
        prevStars.filter((star) => star.y < containerHeight)
      );
      playSound("miss.wav");

      if (missed + missedStars.length >= 10) {
        toast.error("You missed 10 stars! Redirecting to home page...", {
          position: "top-center",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    }
  }, [stars, playSound, missed]);

  // Handle star click
  const handleStarClick = (id) => {
    playSound("audio.wav");
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
    setScore((prevScore) => prevScore + 1);
  };

  // Level management
  useEffect(() => {
    const newLevel = Math.floor(score / 5) + 1;
    if (newLevel > level) {
      setLevel(newLevel);

      // Play level-up sound
      playSound("level-up.mp3");
    }
  }, [score, level, playSound]);

  // Show level-up toast and stop game at level 5
  useEffect(() => {
    if (level > prevLevel) {
      setPrevLevel(level); // Update previous level
      if (level === 5) {
        setGameOver(true); // Stop the game
        toast.success("You reached Level 5! Great Job!", {
          position: "top-center",
        });
      } else {
        toast.info(`Level Up! Welcome to Level ${level}`, {
          position: "top-center",
        });
      }
    }
  }, [level, prevLevel]);

  // Close rules modal
  const closeRules = () => {
    setShowRules(false);
    toast.info("Game Started! Catch the stars!", { position: "top-center" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle, #2c3e50, #3498db, #9b59b6)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <ToastContainer />

      {/* Rules Modal */}
      {showRules && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#34495e",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.7)",
            zIndex: 10,
          }}
        >
          <h2>Welcome to the Star Catch Game!</h2>
          <p style={{ marginBottom: "1rem" }}>
            - Catch stars to increase your score.<br />
            - Speed increases with levels.<br />
            - Reach Level 5 to complete the game!<br />
          </p>
          <button
            onClick={closeRules}
            style={{
              padding: "10px 20px",
              background: "#e74c3c",
              border: "none",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Start Game
          </button>
        </div>
      )}

      {/* Game Over Animation */}
      {gameOver && (
        <animated.div
          style={{
            ...gameOverAnimation,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#1abc9c",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            zIndex: 20,
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
            🎉 Congratulations! 🎉
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            You've completed the game by reaching Level 5!
          </p>
        </animated.div>
      )}

      <div
        style={{
          position: "relative",
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          background: "rgba(0,0,0,0.7)",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.8)",
          marginBottom: "20px",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            style={{
              position: "absolute",
              top: `${star.y}px`,
              left: `${star.x}px`,
              width: `${starSize}px`,
              height: `${starSize}px`,
              backgroundColor: "yellow",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(255,255,0,1)",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
          Score: <span style={{ color: "#2ecc71" }}>{score}</span>
        </h2>
        <h4 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Missed Stars: <span style={{ color: "#e74c3c" }}>{missed}</span>
        </h4>
        <h4 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Level: <span style={{ color: "#3498db" }}>{level}</span>
        </h4>
      </div>
    </div>
  );
};

export default NoPage;
