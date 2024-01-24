# Priority To-Do List App

## Overview

The Priority To-Do List App is a web application designed to help users manage and prioritize their tasks based on different priority levels. Users can add tasks, assign priorities (low, medium, high), and view tasks categorized by priority. The app aims to provide a simple and intuitive interface for effective task management.

## Features

### 1. Task Input Section

#### 1.1 Task Input
- Type: Text Input
- Placeholder: "Add a new task"
- Functionality: Allows users to input the task they want to add to the to-do list.

#### 1.2 Priority Selection
- Type: Dropdown
- Options: "Low Priority," "Medium Priority," "High Priority"
- Default: Low Priority
- Functionality: Users can select the priority level for the task.

#### 1.3 Add Task Button
- Type: Button
- Text: "Add"
- Functionality: Adds the task to the to-do list with the specified priority.

### 2. Task Display Section

#### 2.1 Task Lists
- Low Priority List: Displays tasks with low priority.
- Medium Priority List: Displays tasks with medium priority.
- High Priority List: Displays tasks with high priority.

#### 2.2 Task Deletion
- Type: Button (Delete)
- Text: "Delete"
- Functionality: Allows users to delete a task from the list.

#### 2.3 Dynamic View
- Functionality: Tasks are dynamically added to the respective lists based on their priority.

## Technical Specifications

- Frontend Framework: React
- Styling: Bootstrap for responsive design
- State Management: React Hooks (useState)

## Style Guide

### Colors

- Primary Color: #007bff (Primary Blue) - Used for the "Add" button.
- Secondary Color: #dc3545 (Danger Red) - Used for the "Remove" button.

### Typography

- Heading Font: Use the default Bootstrap heading font.
- Body Text Font: Use the default Bootstrap body font.

### Form Input

- Input Background Color: #ffffff (White)
- Input Text Color: #000000 (Black)
- Button Background Color: #007bff (Primary Blue)
- Button Text Color: #ffffff (White)

### TODO List

- List Item Background Color: #ffffff (White)
- List Item Border Color: #dee2e6 (Light Gray)
- List Item Text Color: #000000 (Black)
- Remove Button Background Color: #dc3545 (Danger Red)
- Remove Button Text Color: #ffffff (White)
