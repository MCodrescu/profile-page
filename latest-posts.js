let latest_post_data = `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-10 col-xl-6 d-inline-block">
            <h1>Latest Posts</h1>
            <ul class="list-group list-group-flush">
              <a
              href="R-Blog-Post-4.html"
              class="list-group-item list-group-item-action"
            >
              Setting Up a Plumber API on Ubuntu
            </a>
            <a
              href="R-Blog-Post-2.html"
              class="list-group-item list-group-item-action"
            >
              Filtered API Requests to Knack Using R
            </a>
            <a
              href="R-Blog-Post-1.html"
              class="list-group-item list-group-item-action"
              >From SQL Query to HTML Table</a
            >
            </ul>
        </div>
      </div>
    </div>
    
`;

let latest_post_block = document.querySelector("#latest-posts");
latest_post_block.innerHTML = latest_post_data;
