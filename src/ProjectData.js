// import 'whatwg-fetch';

const users = ["G0J0-Satoru", "r-ddle"];
let user = {};

async function fetchRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch repositories for user ${username}. Status code: ${response.status}`);
        }

        const repos = await response.json(); // Store the received object items in a variable

        // Fetch user details
        const userDetailsResponse = await fetch(`https://api.github.com/users/${username}`);
        const userDetails = await userDetailsResponse.json();

        // Update the user object with the fetched details
        user = {
            Name: userDetails.login,
            Pfp: userDetails.avatar_url,
            ProjectName: repos[0]?.name || 'N/A',
            ProjectDescription: repos[0]?.description || 'N/A',
            repoTitle: repos[0]?.name || 'N/A',
            repoDescription: repos[0]?.description || 'N/A',
            repoDate: repos[0]?.created_at || 'N/A',
        };

        // Create and display the table rows
        repos.forEach(repo => {
            const repoDetails = {
                Name: userDetails.login,
                repoTitle: repo.name,
                repoDescription: repo.description,
            };
            const tableRow = createTableRow(repoDetails);
            document.getElementById('repo-table-body').innerHTML += tableRow;
        });
    } catch (error) {
        console.error(error);
    }
}

function createTableRow(repoDetails) {
    return `
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${repoDetails.Name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${repoDetails.repoTitle}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${repoDetails.repoDescription}</td>
        </tr>
    `;
}

async function fetchAllRepos() {
    for (const username of users) {
        await fetchRepos(username);
    }
}

// Fetch repositories for all users when the script loads
fetchAllRepos();