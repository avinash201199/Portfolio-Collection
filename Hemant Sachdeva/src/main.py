# Copyright (C) 2021 Hemant Sachdeva <hemant.evolver@gmail.com>

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

import os
import sys
from src.life import educations, experiences, projects

try:
    from flask import Flask, render_template, request
except ImportError:
    sys.exit("[!] Flask module not found. Install it by 'pip3 install flask'")

application = Flask(__name__)


def bot_message(data):
    # Get the bot API key from the environment variable
    BOT_API = os.getenv("BOT_API")
    # Get the chat ID from the environment variable
    CHAT_ID = os.getenv("CHAT_ID")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")
    TEXT_MESSAGE = f"Email: <code>{email}</code>\nSubject: <code>{subject}</code>\nMessage: <code>{message}</code>"
    url = f"https://api.telegram.org/bot{BOT_API}/sendMessage"
    # use curl to send the message to the bot API and the chat ID of telegram group where the bot is joined
    os.system(
        f"curl -s -X POST '{url}' -d chat_id={CHAT_ID} -d text='{TEXT_MESSAGE}' -d parse_mode='HTML'")


@application.route('/')
def index():
    context = {
        'educations': educations,
        'projects': projects,
        'experiences': experiences
    }
    return render_template('index.html', context=context)


@application.route('/send_message', methods=['POST'])
def send_message():
    try:
        data = request.form.to_dict()
        bot_message(data)
        return render_template('/thankyou.html')
    except:
        return render_template('/error.html')
