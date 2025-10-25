const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Calculator app is running!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log('╔════════════════════════════════════════╗');
    console.log('║   🚀 Calculator App is Running!       ║');
    console.log('╚════════════════════════════════════════╝');
    console.log(`\n📱 Local:            http://localhost:${PORT}`);
    console.log(`🌐 Network:          http://192.168.x.x:${PORT}`);
    console.log(`\n✨ Features:`);
    console.log(`   • Responsive design`);
    console.log(`   • Dark/Light theme toggle`);
    console.log(`   • Glassmorphism styling`);
    console.log(`   • Keyboard support`);
    console.log(`\n⌨️  Press Ctrl+C to stop\n`);
});
