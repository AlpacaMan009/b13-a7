# KeenKeeper

KeenKeeper is a personal relationship management app designed to help you keep track of meaningful connections. Browse your friends, log your interactions, and visualize your communication habits to ensure no relationship is left behind.

**[🔴 View Live Demo](https://b13-a7-keenkeeper.netlify.app/)** 

## 🚀 Features

*   **Friend Directory:** Browse a grid of 12 different friends with their avatar, tags, and current relationship status (Overdue, Almost Due, On-Track).
*   **Detailed Profiles:** Click on any friend to view their full profile, including their bio, relationship goal, and preferred contact method.
*   **Quick Check-In:** Log a "Call", "Text", or "Video" interaction directly from a friend's profile.
*   **Dynamic Timeline:** View a chronological feed of all your recent interactions.
*   **Friendship Analytics:** A dynamic pie chart (using Recharts) that visualizes your interactions by type (Call, Text, Video).
*   **Responsive Design:** Fully responsive UI built with Tailwind CSS and DaisyUI, adapting from mobile screens to large desktops.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Charts:** [Recharts](https://recharts.org/)
*   **State Management:** React Context API (for logging timeline events)

## 📂 Project Structure

*   `src/app/` - Next.js App Router pages (Home, Timeline, Stats, Friend Details)
*   `src/comps/` - Reusable UI components (Navbar, Banner, Info cards, FriendProfile, FriendsCard)
*   `src/context/` - Global state providers (TimeLineProvider)
*   `public/data.json` - The static database containing friend profiles

## 💻 Getting Started

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

2. **Navigate the project repository**

    cd b13-a7

3. **Install dependencies**

    npm install

4. **Run the development server**

    npm run dev