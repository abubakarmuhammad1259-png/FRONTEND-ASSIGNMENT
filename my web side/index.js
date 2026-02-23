<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - PurpleSky</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #764ba2; --bg: linear-gradient(135deg, #667eea, #764ba2); }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; transition: 0.3s ease; }
        body { background: var(--bg); min-height: 100vh; display: flex; flex-direction: column; }
        
        nav { background: white; padding: 15px 5%; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .logo { font-weight: 700; font-size: 1.5rem; color: var(--primary); }
        .nav-links { display: flex; list-style: none; gap: 25px; }
        .nav-links a { text-decoration: none; color: #333; font-weight: 500; }
        .nav-links a:hover, .active-link { color: var(--primary) !important; border-bottom: 2px solid var(--primary); }

        .container { flex: 1; display: flex; justify-content: center; align-items: center; padding: 40px; }
        
        .card { background: white; padding: 40px; border-radius: 20px; width: 100%; max-width: 450px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.3); }

        input, textarea { width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px; border: 1px solid #ddd; outline: none; }
        input:focus { border-color: var(--primary); }

        .btn { 
            width: 100%; padding: 12px; background: var(--primary); color: white; border: none; 
            border-radius: 50px; cursor: pointer; font-weight: 600; margin-top: 10px;
        }
        .btn:hover { transform: scale(1.05); filter: brightness(1.1); }

        footer { background: white; padding: 20px; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <nav>
        <div class="logo">PurpleSky</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contactus.html" class="active-link">Contact Us</a></li>
        </ul>
    </nav>
    <div class="container">
        <div class="card">
            <h2 style="text-align: center; margin-bottom: 20px;">Get in Touch</h2>
            <form action="#">
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Message"></textarea>
                <button type="submit" class="btn">Send Now</button>
            </form>
        </div>
    </div>
    <footer>&copy; 2026 PurpleSky Media</footer>
</body>
</html>