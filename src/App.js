import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    const url = 'https://v2.jokeapi.dev/joke/Programming'; // 选择你希望使用的 API URL
    const options = {
      method: 'GET'
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json(); // 解析 JSON 响应
      console.log(result); // 打印响应以检查格式
      setJoke(result.joke || 'No joke found'); // 根据实际 API 结果设置笑话
      setError(''); // 清除错误消息
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke(''); // 清空笑话
      setError('Failed to fetch joke'); // 设置错误消息
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div id="quote-box" className="text-center">
        <p id="text">{joke || error}</p> {/* 显示错误消息 */}
        <button id="new-quote" className="btn btn-primary" onClick={fetchJoke}>New Joke</button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(joke)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info ml-2"
        >
          Tweet Joke
        </a>
      </div>
    </div>
  );
}

export default App;
