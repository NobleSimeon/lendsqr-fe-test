# Lendsqr Admin Dashboard

![Lendsqr Logo](/public/Group.svg)

A modern, responsive admin dashboard for Lendsqr, a lending-as-a-service platform. This dashboard provides comprehensive user management capabilities for financial institutions.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Personal Experience](#personal-experience)
- [Future Improvements](#future-improvements)

## ✨ Features

### Authentication
- **Login Page**: Clean, responsive login interface with form validation
- **Password Visibility Toggle**: Option to show/hide password

### Dashboard Layout
- **Responsive Sidebar**: Collapsible sidebar using shadcn/ui components
- **Mobile-Friendly Navigation**: Adapts to different screen sizes
- **Organization Switcher**: Dropdown to switch between organizations

### User Management
- **User Overview**: Statistical cards showing user metrics
- **User Listing**: Comprehensive table with user information
- **Pagination**: Navigate through user records
- **Status Indicators**: Visual indicators for user status (Active, Inactive, Blacklisted, Pending)

### Filtering and Search
- **Advanced Filtering**: Filter users by organization, username, email, date, phone number, and status
- **Global Search**: Search functionality in the navigation bar

### User Details
- **User Profile**: Detailed view of user information
- **Tabbed Interface**: Organized sections for different user data categories:
  - General Details
  - Documents
  - Bank Details
  - Loans
  - Savings
  - App and System
- **User Actions**: Options to blacklist or activate users
- **User Tier**: Visual representation of user tier with star ratings

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/NobleSimeon/lendsqr-fe-test.git
   cd lendsqr-fe-test
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
lendsqr-admin-dashboard/
├── src/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx            # Dashboard layout with navbar/sidebar
│   │   │   └── users/
│   │   │       ├── page.tsx          # Users listing page
│   │   │       ├── loading.tsx       # Loading state for users
│   │   │       ├── error.tsx         # Error state for users
│   │   │       └── [id]/
│   │   │           ├── page.tsx      # User details page
│   │   │           └── layout.tsx    # Layout for user details
│   │   ├── (auth)/
│   │   │   ├── layout.tsx            # Auth layout
│   │   │   └── sign-in/
│   │   │       └── page.tsx          # Sign-in page
│   │   ├── not-found.tsx             # Custom not-found page (dashboard scope)
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Root page (could be login/landing)
│   ├── components/
│   │   ├── app-sidebar.tsx           # Main sidebar component
│   │   ├── navbar.tsx                # Top navigation bar
│   │   ├── user-details-tab.tsx      # User details tab component
│   │   ├── stat-card.tsx             # Statistical cards
│   │   ├── statusBadge.tsx           # Status badge component
│   │   ├── table/
│   │   │   ├── usertable.tsx         # User table with pagination, etc.
│   │   │   ├── filter-form.tsx       # User filtering form
│   │   │   ├── UserActionsCell.tsx   # Table action cell
│   │   │   ├── column.tsx            # Table column definitions
│   │   │   ├── tablePaginate.tsx     # Table pagination component
│   │   │   └── TableSkeleton.tsx     # Table loading skeleton
│   │   └── ui/                       # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── sidebar.tsx
│   │       ├── avatar.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── popover.tsx
│   │       ├── sheet.tsx
│   │       ├── card.tsx
│   │       ├── skeleton.tsx
│   │       ├── tooltip.tsx
│   │       ├── separator.tsx
│   │       └── table.tsx
│   ├── context/
│   │   └── FilterContext.tsx         # Global filter context
│   ├── lib/
│   │   ├── getUsers.ts               # Fetch all users
│   │   ├── getUserById.ts            # Fetch user by ID
│   │   └── utils.ts                  # Utility functions
│   └── globals.css                   # Global styles
├── public/
│   ├── avatar.png
│   ├── Group.svg
│   ├── pablo-sign-in 1.png
│   └── icons/              # Tailwind configuration
└── README.md
\`\`\`

## 🧩 Key Components

### AppSidebar
The sidebar component uses shadcn/ui's Sidebar primitives to create a responsive, collapsible navigation menu with organized sections for different parts of the application.

### FilterForm
A comprehensive filtering form that allows users to filter the user list by various criteria including organization, username, email, date, phone number, and status.

### Usertable
A comprehensive table in a web application is a data table (or data grid) that provides users with advanced features for viewing and managing large datasets. Two of the most important features for usability and performance are pagination and page size selection. And also filtering

### StatCard
Reusable component for displaying statistical information with customizable icons and backgrounds.

### User Details Page
A dynamic route that displays detailed information about a selected user, organized into tabs for better information architecture.

## 💭 Personal Experience

Developing this Lendsqr admin dashboard was an enriching experience that allowed me to work with modern web technologies and design patterns. Here are some highlights from my experience:

### Technical Challenges

Implementing the filter form with proper positioning was another interesting challenge. I needed to ensure it always opened on the left side regardless of which filter icon was clicked, while maintaining a clean UI. 

Doing the pagination, filtering was kinda also challenging. But Tanstack Table to the rescue

### Design Decisions

I chose to use a tabbed interface for the user details page to organize the large amount of information in a user-friendly way. This approach prevents overwhelming the user with too much information at once and provides a clean, organized view.

For the color scheme, I strictly adhered to Lendsqr's brand colors (blue #213F7D and teal #39CDCC) to maintain brand consistency throughout the application.

### Learnings

This project reinforced the importance of component composition and reusability. By creating well-designed, reusable components like StatCard and FilterForm, I was able to maintain consistency and reduce development time.

I also gained valuable experience with Next.js App Router and dynamic routes, which provided a clean way to handle the user details page with its URL parameter.

## 🔮 Future Improvements

- **Authentication**: Implement proper authentication with JWT or OAuth
- **State Management**: Add global state management for larger scale applications
- **API Integration**: Connect to a real backend API instead of mock data
- **Data Visualization**: Add charts and graphs for better data representation
- **Export Functionality**: Allow exporting user data to CSV or Excel
- **Bulk Actions**: Implement bulk actions for user management
- **User Activity Logs**: Track and display user activity
- **Dark Mode**: Implement a dark mode option
- **Notifications System**: Real-time notifications for important events
A comprehensive table that has pagination, page size