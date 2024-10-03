
# ve-front

# Getting Started with Create React App

Graphic Design Project Management System
Overview
This readme provides a detailed and organized explanation of a graphic design project management system within an advertising company. The system encompasses database design, project management, supply management, printing processes, workflow, alerts, and accounting integration.


1. Database Design
A. Database Tables:
Customers:

Data: Name, Address, Contact Number.
Relationships: Linked to Orders table to determine who placed each order.
Orders:

Data: Order Number, Order Date, Order Status.
Relationships: Associated with Customers, Designs, and Representatives tables.
Products:

Data: Description, Price.
Relationships: Can be linked to Orders table to specify products in each order.
Designers:

Data: Name, Skills.
Relationships: Linked to Designs table to identify who created each design.
Designs:

Data: Design Details, Reviews, Modifications.
Relationships: Associated with Orders and Designers tables.
Representatives:

Data: Name, Covered Areas.
Relationships: Connected to Orders to specify who handles each order.
Accounts:

Data: Financial Transactions, Invoices, Payments.
Relationships: Linked to Orders and Customers to track financial transactions.
Printers:

Data: Printer Name, Provided Services.
Relationships: Can be linked to Orders table to track printing locations.
Communications:

Data: Interaction Records with Customers.
Relationships: Connected to Customers and Representatives.
Inventory:

Data: Materials and Supplies.
Relationships: Associated with Products and Orders to track material usage.
Reports:

Data: Sales, Production, Customer Satisfaction Reports.
Relationships: Collects data from all other tables for performance analysis.
B. Additional Possible Tables:
Customer Feedback:
For recording customer notes and evaluations after completing orders.
Work Schedules:
To track schedules of designers and other staff.
Issues Log:
To record and monitor any problems or challenges faced during project execution.
Each of these tables enhances the system's data network, providing deeper analysis and more efficient management of all aspects of graphic design project management.

2. Project Management
A. Project Identification and Planning:
Understanding Customer Request and Requirements:
Receiving Requests: Communicating with the customer to clearly understand their requests and expectations.
Requirements Analysis: Thoroughly studying customer requirements to understand the type of design, goals, deadlines, and budget.
Work Plan Preparation, Resource Allocation, and Schedule Determination:
Work Plan Preparation: Developing a detailed plan including goal identification, key steps, and expected outcomes.
Resource Allocation: Identifying and allocating individuals (e.g., designers, representatives) and other necessary resources for the project.
Schedule Determination: Establishing a clear timeline that includes deadlines for each project phase.
B. Project Execution and Monitoring:
Initiating Execution According to the Plan:
Work Execution: Starting work on the project according to the established plan.
Task Distribution: Identifying tasks and distributing them among the relevant team.
Performance Monitoring and Necessary Adjustments:
Progress Tracking: Monitoring project progress and comparing it to the planned schedule.
Performance Evaluation: Evaluating team performance and the quality of completed work.
Making Adjustments: Making any necessary adjustments to ensure compliance with requirements.
C. Project Closure:
Verifying Completion of Work:
Work Review: Ensuring all aspects of the project are successfully completed.
Quality Check: Ensuring that the completed work meets the required quality standards.
Delivering the Project to the Customer:
Presenting Work to the Customer: Presenting the final work to the customer for review and approval.
Receiving Feedback: Listening to any feedback or modification requests from the customer.
Final Delivery: After obtaining final approval from the customer, officially delivering the work.
These steps require careful coordination and effective communication among all team members and the customer to ensure project success and achievement of desired goals.

3. Supply and Printing Management
A. Supply Management:
Identifying Needs, Finding Suppliers, and Placing Orders.
B. Printing:
Design Preparation for Printing, Printer Selection, and File Submission.
4. Workflow
Gathering Information from the Customer.
Preparing and Reviewing Orders.
Assigning Orders to Designers.
Creating Initial Designs.
Presenting Designs to the Customer.
Modifying and Re-Presenting Designs.
Final Customer Approval.
File Preparation for Printing.
Printing and Delivery of Orders.
5. Alerts and Reminders
Creating alerts for each stage of the project to ensure timely control and effective project management.

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

6. Accounting System
Integrating the accounting system with order processes, collection, delivery, and supply of materials to ensure financial information accuracy.