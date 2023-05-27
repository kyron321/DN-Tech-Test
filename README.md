# Digital Native Technical Challenge

This project is a simple client-server application which allows a user to fill in a form, then sends that form data to a server. The server then sends an email with the form data using the SendGrid API.

## Getting Started

### Prerequisites

To get started with this project, you'll need:

- Node.js and npm (Node Package Manager). You can download both from [here](https://nodejs.org).
- A SendGrid account, which you can sign up for free [here](https://sendgrid.com/free).
- Your SendGrid API Key, which you'll get when you sign up.

### Setting Up

1. Clone the repository:

```shell
git clone https://github.com/kyron321/DN-Tech-Test
```

2. Navigate to the repository folder:

```shell
cd DN-Tech-Test
```

3. Install the dependencies:

```shell
npm install
```

### Configuring SendGrid

You need to set your SendGrid API Key as an environment variable for the server to use. This keeps the key secure and not exposed in your code.

On UNIX systems (Linux/macOS), you can do this in your terminal:

```shell
export SENDGRID_API_KEY=your_api_key
```

On Windows, you can do this in your command prompt:

```shell
set SENDGRID_API_KEY=your_api_key
```

Remember to replace your_api_key with your actual SendGrid API Key.

### Running the tests

This application uses simple JavaScript validation for the form fields. Test the form with various inputs to ensure the validation is working as expected.

### Running the Application

1. Start the server:

```shell
node server.js
```

2. Open the index.html file in your web browser.

You should now be able to fill out the form and submit it. If the form data is valid, it will be sent to the server and then emailed using SendGrid.

## Built With

- [HTML/CSS/JavaScript](https://developer.mozilla.org/en-US/docs/Web) - Front-end form and validation
- [Node.js](https://nodejs.org) - Back-end server runtime environment
- [Express.js](https://expressjs.com) - Web application framework used in the back-end
- [SendGrid](https://sendgrid.com) - Email delivery service
