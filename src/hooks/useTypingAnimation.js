import { useState, useEffect, useRef } from "react";

export function useTypingAnimation(words, active = true) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    if (!active) return;

    wordIndex.current = 0;
    charIndex.current = 0;
    setIsDeleting(false);
    setText("");

    function tick() {
      const word = words[wordIndex.current];
      if (!isDeleting) {
        charIndex.current++;
        setText(word.slice(0, charIndex.current));
        if (charIndex.current === word.length) {
          setIsDeleting(true);
          timer.current = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex.current--;
        setText(word.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          setIsDeleting(false);
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }
      timer.current = setTimeout(tick, isDeleting ? 60 : 90);
    }

    timer.current = setTimeout(tick, 100);
    return () => clearTimeout(timer.current);
  }, [active, words]);

  // need to reset deleting state on re-activation
  useEffect(() => {
    if (!active) {
      clearTimeout(timer.current);
    }
  }, [active]);

  return text;
}
