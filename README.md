# Date Range Picker Project

## Overview

This project implements a customizable date range picker component in React. It allows users to select date ranges with various predefined options like "Last 7 Days", "Last 15 Days", and "Last 30 Days". The component is built with flexibility and ease of use in mind, suitable for integration into broader applications requiring date selection functionality.

## Features

- Selection of custom date ranges
- Predefined date ranges for quick selection
- Business day filtering (weekends excluded)
- Year constraint (restricts selection to a specified year onwards)

# 🎥

![Demo GIF](https://im.ezgif.com/tmp/ezgif-1-b6a24599c7.gif)

## Getting Started

Follow these steps to run the Date Range Picker project on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gem-codes/date-range-picker.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd date-range-picker
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

5. **View the App**: Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the Date Range Picker.

## Usage

1. **Select a Start Date**: Click on the first date input field to open the date picker and select the start date for your range. The date picker prevents the selection of dates before the year 2024 and weekends.

2. **Select an End Date**: Click on the second date input field to choose the end date for your range. The date picker will ensure that the end date is not before the start date.

3. **Observe Real-Time Updates and Validation**:

   - The selected date range will be displayed below the date pickers.
   - If the start date is after the end date, an error message will be displayed.
   - The weekends within the selected date range will be listed for your reference.

4. **Use Predefined Date Ranges**: For quick selection, use the predefined date range buttons such as "Last 7 Days", "Last 15 Days", and "Last 30 Days". These buttons automatically adjust the start and end dates based on today's date.

5. **Custom Date Validation**: The component also ensures that the dates fall within business days and meet the specified constraints (e.g., year restriction).
