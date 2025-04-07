# Buycott 🌍🛡️

A social impact mobile application that empowers users to make informed purchasing decisions by boycotting products from companies supporting harmful activities.

## Features

### Onboarding Experience

- Educational onboarding screens highlighting important causes
- Inspirational Islamic Hadith to motivate users
- Awareness about social and political issues

### Product Information

- Comprehensive boycotted product list
- Verified alternative product suggestions
- Detailed product information including manufacturer details
- Brand-specific boycotted product listings

### Product Scanner

- QR/Barcode scanning functionality
- Instant verification of product status
- Alternative product recommendations
- Real-time product updates

### Community Features

- Verified user system for alternative product submissions
- Voting system for alternative solutions
- Commenting functionality for verified users
- Trust-based content moderation

### User Authentication

- Secure user registration and login
- Verified user status for content creation
- Account-based voting and commenting system

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: Tailwind CSS with NativeWind
- **UI Components**: React Native built-in components
- **Icons**: Expo Vector Icons
- **Camera**: Expo Camera
- **System Integration**: Various Expo packages (haptics, status bar, etc.)

## Backend Architecture

### Data Collections

- **Products**: Stores scanned product information
- **Boycotted Products**: Verified list of products to boycott
- **Alternative Solutions**: User-submitted alternative products
- **Islamic Hadith**: Collection of inspirational Hadith
- **Users**: User authentication and verification status

### Security Features

- Admin/trusted user verification system
- Content moderation workflow
- Product verification process
- User authentication system

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI
- A mobile device or emulator (Android/iOS)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Buycott
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Running the App

- For Android: `npm run android`
- For iOS: `npm run ios`
- For Web: `npm run web`

## Project Structure

```
Buycott/
├── app/                 # Main application routes and screens
│   ├── onboarding/     # Onboarding screens
│   ├── home/           # Home screen with product listings
│   └── scanner/        # Product scanning functionality
├── components/         # Reusable UI components
├── constants/          # Application constants
├── hooks/             # Custom React hooks
├── assets/            # Static assets (images, fonts, etc.)
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Development

### Available Scripts

- `npm start`: Start the development server
- `npm run android`: Run on Android device/emulator
- `npm run ios`: Run on iOS device/simulator
- `npm run web`: Run in web browser
- `npm test`: Run tests
- `npm run lint`: Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
# buycott
