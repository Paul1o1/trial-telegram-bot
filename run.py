from telegram_job_bot.bot import run_bot
from telegram_job_bot.database import init_db

if __name__ == "__main__":
    init_db()
    run_bot()
