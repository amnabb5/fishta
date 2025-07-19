import React, { useState } from 'react';

const FishtaDownload: React.FC = () => {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value.trim()) {
      alert(`Please enter your ${method === 'phone' ? 'phone number' : 'email'}`);
      return;
    }
    // Logic to share app link (e.g. send SMS or email)
    alert(`App link will be sent to your ${method}: ${value}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContent}>
        <h1 style={styles.title}>
          Get <span style={styles.fishtaRed}>FISHTA</span> App
        </h1>
        <p style={styles.description}>
          We will send you a link, open it on your phone to download the app.
        </p>

        <div style={styles.radioGroup}>
          <label>
            <input
              type="radio"
              checked={method === 'phone'}
              onChange={() => setMethod('phone')}
            />{' '}
            Phone
          </label>
          <label>
            <input
              type="radio"
              checked={method === 'email'}
              onChange={() => setMethod('email')}
            />{' '}
            Email
          </label>
        </div>

        <div style={styles.inputGroup}>
          <input
            type={method === 'phone' ? 'tel' : 'email'}
            placeholder={method === 'phone' ? 'Your Phone Number' : 'Your Email'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSubmit} style={styles.button}>
            Share App Link
          </button>
        </div>

        <p>Download App From</p>
        <div style={styles.downloadButtons}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={styles.storeBadge}
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            style={styles.storeBadge}
          />
        </div>
      </div>

      <div style={styles.phoneImage}>
        <img
          src="/path-to-your-phone-image.png"
          alt="Fishta App Preview"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '60px 10%',
    flexWrap: 'wrap',
  },
  textContent: {
    maxWidth: '480px',
  },
  title: {
    fontSize: '42px',
    marginBottom: '20px',
  },
  fishtaRed: {
    color: '#FF3B30',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#333',
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flexGrow: 1,
    minWidth: '240px',
  },
  button: {
    backgroundColor: '#FF3B30',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  downloadButtons: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
  },
  storeBadge: {
    height: '50px',
    cursor: 'pointer',
  },
  phoneImage: {
    maxWidth: '400px',
    marginTop: '30px',
  },
};

export default FishtaDownload;
