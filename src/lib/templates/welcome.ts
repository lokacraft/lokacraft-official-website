export const welcomeTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0b3552;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 40px auto;
            overflow: hidden;
        }
        .header {
            background-color: #0b3552;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }
        .header img {
            max-width: 150px;
            margin-bottom: 10px;
        }
        .content {
            padding: 20px;
        }
        .content h1 {
            font-size: 20px;
            margin-bottom: 20px;
        }
        .content img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
            border-radius: 10px;
        }
        .content p {
            margin-bottom: 20px;
            line-height: 1.6;
        }
        .content .details {
            margin-bottom: 20px;
        }
        .content .details p {
            margin: 5px 0;
        }
        .content .reply-button {
            text-align: center;
            margin: 20px 0;
        }
        .content .reply-button a {
            background-color: #0b3552;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #ffffff;
            background-color: #0b3552;
        }
        .footer .social-icons img {
            width: 30px;
            margin: 0 5px;
        }
        .text-bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.postimg.cc/dtg5Zgd4/logo-Footer.png" alt="lexica">
        </div>
        <div class="content">
            <h1>Pesan Baru dari Formulir Kontak Website Anda</h1>
            <img src="https://i.postimg.cc/q7TQjn1K/banner.png" alt="Contact Image">
            <p>Email pengirim: {{ from }}</p>
            <p>Email penerima: {{ to }}</p>
            <h2>Halo Tim Dukungan Arthaloka,</h2>
            <p>Anda telah menerima pesan baru melalui formulir kontak di website www.arthaloka.com. Berikut adalah rincian pesan yang telah dikirimkan:</p>
            <div class="details">
                <p>Nama: <span class="text-bold">{{ name }}</span></p>
                <p>Nama Perusahaan: <span class="text-bold">{{ companyName }}</span></p>
                <p>Email: <span class="text-bold">{{ from }}</span></p>
                <p>Kategori: <span class="text-bold">{{ selectedCategory }}</p>
                <p>Pesan: {{ body }}</p>
            </div>
            <p>Silakan segera tindak lanjuti pesan ini sesuai prosedur yang berlaku untuk memastikan kepuasan pelanggan.</p>
            
            <p>Terima kasih</p>
            <p>Tim Dukungan Arthaloka</p>
        </div>
        <div class="footer">
            <p>Follow us on:</p>
            <div class="social-icons">
                <a href="#"><img src="https://dummyimage.com/30x30/0b3552/ffffff&text=I" alt="Instagram"></a>
                <a href="#"><img src="https://dummyimage.com/30x30/0b3552/ffffff&text=W" alt="WhatsApp"></a>
                <a href="#"><img src="https://dummyimage.com/30x30/0b3552/ffffff&text=L" alt="LinkedIn"></a>
            </div>
        </div>
    </div>
</body>
</html>
`;