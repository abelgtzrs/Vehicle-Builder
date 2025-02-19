![License](https://img.shields.io/badge/license-MIT-green)
# Vehicle Builder CLI

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Features](#features)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
Vehicle Builder CLI is a **TypeScript-based command-line application** that allows users to create and interact with different vehicle types, including **Cars, Trucks, and Motorbikes**. The application provides **real-time vehicle actions**, such as starting, accelerating, decelerating, towing (for trucks), and performing wheelies (for motorbikes).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abelgtzrs/vehicle-builder-cli.git
   ```
2. Navigate into the project directory:
   ```bash
   cd vehicle-builder-cli
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Compile TypeScript to JavaScript:
   ```bash
   tsc
   ```

## Usage
Run the CLI application:
```bash
node dist/index.js
```

**Steps to use the application:**
1. Select **Create a new vehicle** or **Choose an existing vehicle**.
2. Enter details for your vehicle (make, model, year, weight, etc.).
3. Select an action:
   - Start the vehicle 🚀
   - Accelerate / Decelerate ⚡🐌
   - Turn Left / Right ➡️ ⬅️
   - Stop the vehicle 🛑
   - Tow another vehicle (Trucks only) 🚛
   - Perform a wheelie (Motorbikes only) 🏍️
4. Exit when finished ❌.

## License
This project is licensed under the **MIT License**.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

## Tests
Run tests with:
```bash
npm test
```
(Currently, no automated tests are implemented.)

## Features
- 🚗 **Create and interact with Cars, Trucks, and Motorbikes**
- 🚛 **Tow feature for Trucks**
- 🏍️ **Perform wheelies with Motorbikes**
- 🎨 **Stylized CLI UI with Boxen and Chalk**
- 📜 **Menu-driven interaction with Inquirer.js**
- 🔍 **Select existing vehicles to perform actions**

## Video Walkthrough
https://drive.google.com/file/d/1Mz4NxJy4nspw7X8sI0AtD2EyUETn0V7G

## Contributors
- Abel Gutierrez

## Questions
For any questions, you can reach me at:
- GitHub: [abelgtzrs](https://github.com/abelgtzrs)
- Email: abelgtzrs@gmail.com
