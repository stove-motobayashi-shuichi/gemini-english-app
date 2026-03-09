import React, { useState, useEffect } from 'react';
import { wordData } from './data';

function App() {
  const [currentWord, setCurrentWord] = useState(null);
  const [showMean, setShowMean] = useState(false);

  // 初回ロード時、またはリセット時にランダムな単語を選択
  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordData.length);
    setCurrentWord(wordData[randomIndex]);
    setShowMean(false);
  };

  useEffect(() => {
    if (wordData.length > 0) {
      selectRandomWord();
    }
  }, []);

  if (!currentWord) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>英単語 アプリ</h1>
      </header>
      <main className="content">
        <div className="word-card">
          <p className="e-word">{currentWord.e_word}</p>
          {showMean ? (
            <p className="mean">{currentWord.mean}</p>
          ) : (
            <div className="mean-placeholder"></div>
          )}
        </div>
        <div className="button-group">
          {!showMean && (
            <button className="main-button" onClick={() => setShowMean(true)}>
              意味
            </button>
          )}
          {showMean && (
            <button className="main-button next-button" onClick={selectRandomWord}>
              次の問題
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
