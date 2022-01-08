let latest_post_data = `
    <h1>Latest Posts</h1>
    <ul class="list-group list-group-flush">
        <a
        href="blog-post-1.html"
        class="list-group-item list-group-item-action"
        >
        Filtered API Requests to Knack Using R
        </a>
        <a href="#" class="list-group-item list-group-item-action"
        >From SQL Query to HTML Table</a
        >
        <a href="#" class="list-group-item list-group-item-action">
        Using R to Determine GPS Locations of Photos
        </a>
    </ul>
`;

let latest_post_block = document.querySelector("#latest-posts");
latest_post_block.innerHTML = latest_post_data;
