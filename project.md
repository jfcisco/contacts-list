# Contacts List

## Specifications w/ Status of Implementation

Create a contact list webpage mockup with CRUD functions. User should be able to:

- [X] Create a contact list using a form.
    1. The form includes the following fields (those with [asterisks] are required fields):
        - a. First name*
        - b. Last name*
        - c. Middle name*
        - d. Birthday* ( this should have a datepicker)
        - e. Gender
        - f. Address* (Address line, City/Province, Country)
        - g. Email address*
        - h. Contact number* (should have the option to save at least 3 contact numbers, one should be marked as primary)
        - i. Company name
- [X] See a list of contact forms, having columns for Name (Last name, First name, Middle initial), Age, City/Province, Email and Contact number (primary).
    1. When a particular contact is selected for viewing, all of its detail is displayed in a modal.
    - [X] Address is formatted correctly.
    - [X] Primary contact number is indicated correctly.
- [ ] Update a particular contact and save its changes.
    1. The required fields should still apply.
- [X] Delete a contact. When delete button is pressed, there should be a confirmation “Do you want to delete this contact?”.
    1. If the user says yes, proceed to delete the selected contact,
    2. if the user says no, go back to the list.
- [ ] Search through the list of contacts by name, email, city/province.
    - [ ] Make UI for filter toolbar
    - [ ] Add logic to filter the list of contacts
- [ ] Must also be readable and usable if viewed on a mobile device.
- [ ] Bonus: (with extra credit)
    1. Create a log-in page, and display the current user logged in.
    2. Validations should be applied.

## Assumptions/Questions
1. Is gender and company name required? 
    1. Assume no
2. #5, assume each search bar is different?
3. What if user has no javascript enabled?
    1. ` <noscript></noscript>` for no JavaScript.
4. Front-end only? No persistence?
5. Is the page design up to me? Are there mockups?
6. Tech stack limitation? React + Typescript only? How about CSS frameworks?
7. Ako ba yung magse-set ng presentation?
