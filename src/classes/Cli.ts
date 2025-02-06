import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// CLI class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // **Generate a Stylish CLI Welcome Banner**
  displayWelcome(): void {
    console.log(
      boxen(chalk.cyan.bold("🚗🚛🏍️ Welcome to Vehicle Builder CLI! 🚗🚛🏍️"), {
        padding: 1,
        margin: 1,
        borderStyle: "double",
      })
    );
  }

  // **Start CLI**
  startCli(): void {
    this.displayWelcome();

    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message: chalk.yellow("What would you like to do?"),
          choices: ["🚘 Create a new vehicle", "🔍 Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === "🚘 Create a new vehicle") {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }

  // **Create Vehicle Menu**
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: chalk.green("Select a vehicle type:"),
          choices: ["🚗 Car", "🚛 Truck", "🏍️ Motorbike"],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === "🚗 Car") {
          this.createCar();
        } else if (answers.vehicleType === "🚛 Truck") {
          this.createTruck();
        } else if (answers.vehicleType === "🏍️ Motorbike") {
          this.createMotorbike();
        }
      });
  }

  // **Create Car**
  createCar(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: chalk.blue("Enter Color:") },
        { type: "input", name: "make", message: chalk.blue("Enter Make:") },
        { type: "input", name: "model", message: chalk.blue("Enter Model:") },
        { type: "input", name: "year", message: chalk.blue("Enter Year:") },
        { type: "input", name: "weight", message: chalk.blue("Enter Weight:") },
        { type: "input", name: "topSpeed", message: chalk.blue("Enter Top Speed:") },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );

        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;

        console.log(
          boxen(chalk.green.bold("🚗 Car Created Successfully!"), {
            padding: 1,
            margin: 1,
            borderStyle: "round",
          })
        );

        this.performActions();
      });
  }
  //Create Truck
  createTruck(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: chalk.blue("Enter Color:") },
        { type: "input", name: "make", message: chalk.blue("Enter Make:") },
        { type: "input", name: "model", message: chalk.blue("Enter Model:") },
        { type: "input", name: "year", message: chalk.blue("Enter Year:") },
        { type: "input", name: "weight", message: chalk.blue("Enter Weight:") },
        { type: "input", name: "topSpeed", message: chalk.blue("Enter Top Speed:") },
        { type: "input", name: "towingCapacity", message: chalk.blue("Enter Towing Capacity:") },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          Array(4).fill(new Wheel()),
          parseInt(answers.towingCapacity)
        );
  
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
  
        console.log(
          boxen(chalk.green.bold("🚛 Truck Created Successfully!"), {
            padding: 1,
            margin: 1,
            borderStyle: "round",
          })
        );
  
        this.performActions();
      });
  }
  //Create Motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: chalk.magenta("Enter Color:") },
        { type: "input", name: "make", message: chalk.magenta("Enter Make:") },
        { type: "input", name: "model", message: chalk.magenta("Enter Model:") },
        { type: "input", name: "year", message: chalk.magenta("Enter Year:") },
        { type: "input", name: "weight", message: chalk.magenta("Enter Weight:") },
        { type: "input", name: "topSpeed", message: chalk.magenta("Enter Top Speed:") },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [new Wheel(), new Wheel()] // Ensure motorbike has 2 wheels
        );
  
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
  
        console.log(
          boxen(chalk.green.bold("🏍️ Motorbike Created Successfully!"), {
            padding: 1,
            margin: 1,
            borderStyle: "round",
          })
        );
  
        this.performActions();
      });
  }
  
  // **Choose Vehicle**
  chooseVehicle(): void {
    if (this.vehicles.length === 0) {
      console.log(chalk.red("⚠️ No vehicles available. Please create one first."));
      return this.createVehicle();
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "selectedVehicleVin",
          message: chalk.yellow("Select a vehicle to perform an action on:"),
          choices: this.vehicles.map((vehicle) => ({
            name: chalk.cyan(`${vehicle.make} ${vehicle.model} (${vehicle.vin})`),
            value: vehicle.vin,
          })),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  // **Perform Actions on Vehicle**
  performActions(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: chalk.magenta("Select an action:"),
          choices: [
            "📜 Print details",
            "🚀 Start vehicle",
            "⚡ Accelerate 5 MPH",
            "🐌 Decelerate 5 MPH",
            "🛑 Stop vehicle",
            "➡️ Turn right",
            "⬅️ Turn left",
            "🔙 Reverse",
            "🔄 Select or create another vehicle",
            "❌ Exit",
          ],
        },
      ])
      .then((answers) => {
        const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
        if (!vehicle) {
          console.log(chalk.red("⚠️ No vehicle selected!"));
          return;
        }

        switch (answers.action) {
          case "📜 Print details":
            console.log(
              boxen(chalk.blue.bold("📜 Vehicle Details"), {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
              })
            );
            vehicle.printDetails();
            break;
          case "🚀 Start vehicle":
            console.log(chalk.green("🚀 Vehicle started!"));
            vehicle.start();
            break;
          case "⚡ Accelerate 5 MPH":
            console.log(chalk.yellow("⚡ Accelerating..."));
            vehicle.accelerate(5);
            break;
          case "🐌 Decelerate 5 MPH":
            console.log(chalk.gray("🐌 Slowing down..."));
            vehicle.decelerate(5);
            break;
          case "🛑 Stop vehicle":
            console.log(chalk.red("🛑 Stopping vehicle..."));
            vehicle.stop();
            break;
          case "➡️ Turn right":
            console.log(chalk.cyan("➡️ Turning right..."));
            vehicle.turn("right");
            break;
          case "⬅️ Turn left":
            console.log(chalk.cyan("⬅️ Turning left..."));
            vehicle.turn("left");
            break;
          case "🔙 Reverse":
            console.log(chalk.blue("🔙 Reversing..."));
            vehicle.reverse();
            break;
          case "🔄 Select or create another vehicle":
            this.startCli();
            return;
          case "❌ Exit":
            this.exit = true;
            console.log(chalk.red.bold("❌ Exiting..."));
            return;
        }

        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // **Generate a VIN**
  static generateVin(): string {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  }
}

// Export CLI
export default Cli;
