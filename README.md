# Spend Sensei V3

Spend Sensei is a personal finance management tool that helps users track their spending, set budgets, and achieve their financial goals. It provides insights into spending habits, offers budgeting tools, and helps users make informed financial decisions.

## Features

Built with Django, HTML, CSS, and JavaScript, this project uses Ajax for async requests and Bootstrap for responsive design. It follows modular architecture for easy scalability, emphasizing clean code and best practices. Chart JS enables data visualization, while the structure allows seamless feature additions. Deployed on Heroku, it’s also designed for easy portability to other platforms.

- User authentication and authorization
- Budget tracking
- Expense tracking
- Data visualization and reporting
- Responsive design for mobile and desktop
- User-friendly interface
- Secure data storage and encryption

## References

- Create a One-Off Secret Key for Django [blog post](https://www.codingforentrepreneurs.com/blog/create-a-one-off-django-secret-key/)

## Getting Started

### Clone

```bash
mkdir -p ~/dev/saas
cd ~/dev/saas
git clone  https://github.com/oluoko/spend-sensei-v3.git
```

### Create Virtual Environment and Installing dependencies

Install 'pipenv' if you don't have it already. You can do this by running:

_Windows_

```bash
pip install pipenv
```

or

_macOS/Linux_

```bash
# `pip install pipenv` also works on macOS/Linux
# but if you want to use the system package manager
# you can use the following commands
sudo apt install pipenv
```

Then, create a virtual environment using the following command:

```bash
pipenv shell
```

or sync it with the one in this project:

```bash
pipenv sync
```

### Install Requirements

```bash
# with venv activated
pipenv install
```

### Example dotenv to dotnev

Follow the instructions in the `.env.example` file to create a `.env` file. You can use the following command to copy the example file:

```bash
cp .env.example .env
cat .env
```
