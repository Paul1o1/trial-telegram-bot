from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, CallbackQueryHandler, ContextTypes
from telegram_job_bot.database import init_db, add_user

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Job Seeker", callback_data='job_seeker')],
        [InlineKeyboardButton("Employer", callback_data='employer')],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Welcome to JobBot! Are you a Job Seeker or Employer?", reply_markup=reply_markup)

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    role = query.data
    user = update.effective_user
    add_user(user.id, user.full_name, role)
    await query.edit_message_text(text=f"Registered as {role.title()}. You can now /viewjobs or /postjob.")

def run_bot():
    from telegram_job_bot import config

    application = ApplicationBuilder().token(config.BOT_TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(button))
    application.run_polling()
