# 01_Make-It-Do-Something — Portfolio Website

Personal developer portfolio website for **Kanak Chaudhary**, built as part of the "Make It Do Something" web development assignment.

## Project Details

- **Owner**: Kanak Chaudhary
- **Role Positioning**: Frontend AI Engineering | Web Development | AI Explorer
- **Location**: Mathura, Uttar Pradesh, India
- **Theme**: Charcoal + Powder (`#17191D` Dark Charcoal background, `#DEBFD0` Powder accents)

## Tech Stack

- React 18
- Vite
- JavaScript (JSX)
- Custom CSS3

## Dynamic Feature: Contact Form

The application contains exactly ONE dynamic feature: an interactive **Contact Form** with complete state handling:
- **Idle State**: Initial form state.
- **Validation State**: Verifies required fields and email regex format.
- **Loading State**: Disables form inputs and updates submit button label to "Sending...".
- **Success State**: Displays a custom muted dark-green confirmation card.
- **Error State**: Shows a styled muted red banner for input issues or API connection failures.

### Backend Data Flow Explanation

1. **User Input & Validation**: The browser first validates input values locally to prevent invalid transmissions.
2. **Payload Transmission**: Upon submitting valid data, an asynchronous HTTP POST request transmits the JSON payload across the network.
3. **Third-Party Processing**: The request is captured by a backend or form processing service (e.g., Netlify Forms, Formspree) which parses the payload and sends an email notification.
4. **Response Handling**: The client updates the UI to show either a success message or a failure banner based on the server response code.

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install