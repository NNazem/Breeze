<h1>Breeze: Real-time Webchat Application</h1>

<p>Breeze is a web-based chat application that enables real-time messaging between users.</p>

<div style="background-color: #ffe6e6; border: 1px solid #ff8080; padding: 10px; margin: 10px 0;">
  <strong>Note:</strong> This is a demonstration project and is not suitable for production use. It is intended for learning and experimentation purposes only.
</div>

<img src="https://github.com/user-attachments/assets/d084f90d-1fdd-4cc5-868c-5c2725d58b6a" alt="Screenshot 2024-08-23 214713" style="max-width: 100%;">

<h2>Current Features</h2>
<ul>
  <li>Real-time messaging between two users</li>
  <li>User authentication (login system)</li>
  <li>Message history storage and retrieval</li>
  <li>Instant updates in the chat window</li>
</ul>

<h2>How It Works</h2>

<h3>Frontend</h3>
<ul>
  <li>Built with React for a responsive user interface</li>
  <li>Uses WebSocket for live message updates</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Developed in Go</li>
  <li>Manages WebSocket connections for real-time communication</li>
  <li>Handles user authentication and message routing</li>
  <li>Utilizes JSON Web Tokens (JWT) for secure authentication</li>
</ul>

<p>For more details on the backend, check out the <a href="https://github.com/NNazem/BreezeServer">BreezeServer repository</a>.</p>

<h3>Database</h3>
<ul>
  <li>PostgreSQL stores user data and message history</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li><strong>Instant messaging:</strong> No need to refresh for new messages</li>
  <li><strong>Efficient server:</strong> Go's concurrency helps manage multiple chats</li>
  <li><strong>Secure access:</strong> Login system controls user access using JWT</li>
  <li><strong>Data persistence:</strong> Chat histories are saved for later retrieval</li>
  <li><strong>Token-based authentication:</strong> JSON Web Tokens ensure secure and stateless authentication</li>
</ul>

<h2>Potential Enhancements</h2>
<p>Ideas for future development:</p>
<ul>
  <li>Implement group chat functionality</li>
  <li>Add file sharing capabilities</li>
  <li>Introduce read receipts and typing indicators</li>
  <li>Enhance user profiles and friend lists</li>
</ul>
