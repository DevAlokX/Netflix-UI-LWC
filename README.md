# Netflix UI Clone

This project is a **Netflix UI clone** built using **Salesforce Lightning Web Components (LWC)**. The goal is to replicate the popular Netflix interface to provide an engaging and visually appealing movie browsing experience.

---

## Features

- **Movie Rows**: Displays different movie genres with their corresponding movie posters.
- **Hover Effects**: Interactive hover effects on movie posters for enhanced user experience.
- **Dynamic Movie Fetching**: Movie data is dynamically fetched from a movie database API.
- **Responsiveness**: The UI is responsive and works across devices with different screen sizes.

---

## Technologies Used

- **Salesforce LWC (Lightning Web Components)**
- **CSS Flexbox** for layout
- **Fetch API** to get movie data
- **TMDb (The Movie Database) API** for fetching movie posters and details.

---

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/netflix-ui-clone.git
    ```

2. **Salesforce Setup**:
    - Deploy the components to your Salesforce org.
    - Ensure the proper CORS settings are configured for API access.

3. **API Configuration**:
    - Obtain a **TMDb API key** from [TMDb](https://www.themoviedb.org/).
    - Update your API URLs and keys in the Salesforce component files.

---

## Usage

- The app dynamically fetches movie categories such as **Netflix Originals**, **Trending**, **Action Movies**, etc., from the TMDb API and displays them in a row format.
- Each movie row contains a title and a list of movie posters.
- Hovering over a movie poster will trigger a scaling effect to provide an interactive experience.

---

## Screenshots

![image](https://github.com/user-attachments/assets/3ae3dc53-2a47-4289-9f5b-8c30fc06cd4a)
![image](https://github.com/user-attachments/assets/9a3c87aa-56fe-4a33-984f-150e7d9b4875)
![image](https://github.com/user-attachments/assets/fc63e9ac-a730-4400-9c0d-89342144e647)



*Example of the Netflix UI Clone with movie rows and posters.*

---

## Future Improvements

- Add functionality to display movie details on click.
- Implement a search bar to allow users to search for movies.
- Enhance UI responsiveness for mobile and tablet views.


