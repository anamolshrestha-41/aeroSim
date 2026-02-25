# AeroSim

Physics simulation API for aerospace and mechanical systems.

## Overview

AeroSim is a Node.js/Express REST API that provides physics simulation endpoints for various motion scenarios including projectile motion, orbital mechanics, atmospheric reentry, and rotational dynamics.

## Tech Stack

- Node.js with Express 5.2.1
- MongoDB with Mongoose 9.1.6
- CORS enabled
- Environment configuration via dotenv

## Architecture

```
aeroSim/
├── server.js              # Entry point, MongoDB connection
├── app.js                 # Express app configuration
├── routes/                # API route definitions
├── controllers/           # Request handlers
├── models/                # MongoDB schemas
└── physics/               # Physics simulation engine
    ├── models/            # Simulation algorithms
    ├── utils/             # Physics utilities
    ├── integrator.js      # Euler integration methods
    ├── state.js           # 2D state class
    └── rotState.js        # Rotational state class
```



### 1. Test Route
**POST** `/test`

Basic Euler integration test.

Request body:
```json
{
  "position": 0,
  "velocity": 10,
  "acceleration": -9.81,
  "time": 5,
  "dt": 0.01
}
```

### 2. Projectile Motion
**POST** `/projectile`

Simulates 2D projectile motion under gravity.

Request body:
```json
{
  "x0": 0,
  "y0": 0,
  "vx0": 20,
  "vy0": 30,
  "g": 9.81,
  "dt": 0.01,
  "maxTime": 10
}
```

### 3. Force Motion
**POST** `/force`

Simulates motion under multiple forces using Newton's second law.

Request body:
```json
{
  "mass": 10,
  "force": [
    {"fx": 50, "fy": 0},
    {"fx": 0, "fy": -98.1}
  ],
  "x0": 0,
  "y0": 0,
  "vx0": 0,
  "vy0": 0,
  "dt": 0.01,
  "maxTime": 10
}
```

### 4. Rotation
**POST** `/rotation`

Simulates circular motion with angular acceleration.

Request body:
```json
{
  "radius": 5,
  "omega0": 2,
  "alpha": 0.5,
  "dt": 0.01,
  "maxTime": 10
}
```

Outputs: angular position, angular velocity, Cartesian position, centripetal and tangential acceleration.

### 5. Energy Analysis
**POST** `/energy`

Simulates motion with energy and momentum tracking.

Request body:
```json
{
  "mass": 10,
  "force": {"x": 50, "y": 0},
  "position0": {"x": 0, "y": 0},
  "velocity0": {"x": 0, "y": 0},
  "gravity": 9.81,
  "dt": 0.01,
  "maxTime": 10
}
```

Outputs: kinetic energy, potential energy, total energy, momentum.

### 6. Orbital Mechanics
**POST** `/orbit`

Simulates orbital motion under gravitational force.

Request body:
```json
{
  "position0": {"x": 7000000, "y": 0},
  "velocity0": {"x": 0, "y": 7500},
  "GM": 3.986e14,
  "dt": 1,
  "maxTime": 10000
}
```

GM: Gravitational parameter (m^3/s^2)

### 7. Atmospheric Reentry
**POST** `/reentry`

Simulates reentry with gravity and atmospheric drag.

Request body:
```json
{
  "mass": 1000,
  "position0": {"x": 0, "y": 100000},
  "velocity0": {"x": 7500, "y": -1000},
  "GM": 3.986e14,
  "Cd": 0.5,
  "area": 10,
  "dt": 0.1,
  "maxTime": 1000
}
```

Cd: Drag coefficient
area: Cross-sectional area (m^2)

## Physics Models

### Integrator
Uses Euler method for numerical integration:
- 2D linear motion: position and velocity updates
- Rotational motion: angular position and velocity updates

### Atmosphere Model
Exponential atmosphere density model:
```
rho(h) = rho0 * exp(-h/H)
```
- rho0 = 1.225 kg/m^3 (sea level)
- H = 8500 m (scale height)

### Gravity Model
Inverse square law gravitational acceleration:
```
a = -GM * r / |r|^3
```

### Drag Model
Quadratic drag force:
```
F_drag = -0.5 * rho * Cd * A * v^2 * (v_hat)
```

### Energy Calculations
- Kinetic Energy: KE = 0.5 * m * v^2
- Gravitational PE: PE = m * g * h
- Orbital Energy: E = 0.5 * v^2 - GM/r

### Momentum Calculations
- Linear: p = m * v
- Angular: L = m * r^2 * omega

## Database Schema

All simulations are stored with:
- type: Simulation type identifier
- input: Request parameters
- output: Simulation results array
- timeStep: Integration time step
- method: Integration method (default: "Euler")
- createdAt: Timestamp

## Response Format

All endpoints return:
```json
{
  "_id": "...",
  "type": "projectile",
  "input": {...},
  "output": [
    {"t": 0, "x": 0, "y": 0, "vx": 20, "vy": 30},
    ...
  ],
  "timeStep": 0.01,
  "method": "Euler",
  "createdAt": "..."
}
```

## Running the Server

```bash
node server.js
```

Server starts on port 3000 with MongoDB connection.

## Notes

- All simulations use Euler integration method
- Time step (dt) affects accuracy vs performance
- Smaller dt values provide better accuracy but more computation
- Projectile simulation stops when y < 0 (ground level)
- Reentry simulation stops when altitude reaches 0
