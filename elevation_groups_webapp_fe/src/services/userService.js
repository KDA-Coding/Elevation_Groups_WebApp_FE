export async function getAllGroups() {

    try {

        const response = await fetch('/groups');
        return await response.json();

    } catch(err) {

        return [];
        
    }

}