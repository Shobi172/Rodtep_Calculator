# RoDTEP Calculator


RoDTEP Calculator is a web application that allows users to calculate the RoDTEP (Remission of Duties and Taxes on Exported Products) value for their exports based on the tariff item, description of goods, RoDTEP rate, UQC/UOM, and cap limit.

# Getting Started

To use the RoDTEP Calculator application, follow the steps below:

### 1. Clone the repository:


git clone https://github.com/Shobi172/RoDTEP-Calculator.git




### 2. Install the dependencies for each folder (frontend, backend):



cd frontend

npm install


cd ../backend

npm install



### 3. Start the servers for each folder:


cd frontend

npm start


cd ../backend

npm start




### 4. Open your browser and navigate to http://localhost:3000 to access the RoDTEP Calculator frontend.


# Features

### SmartSpace provides the following features:


Storage of Tariff item, Description of goods, RoDTEP rate, UQC/UOM, and Cap (Rs per UQC) table in the database

Calculation of RoDTEP value based on the entered HSN code or product description and export value

Consideration of the cap limit and UQC to determine the final RoDTEP amount


# Technologies Used


React.js
Express.js
Node.js
MongoDB



# Contributing

### If you would like to contribute to RoDTEP Calculator project, please follow these steps:

1. Fork the repository

2. Create a new branch (git checkout -b feature/your-feature-name)

3. Make your changes and commit them (git commit -m 'Add some feature')

4. Push your changes to your branch (git push origin feature/your-feature-name)

5. Open a Pull Request
