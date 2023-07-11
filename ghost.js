import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: "http://dylandunn.me",
    key: "0b83f6c8d81a9713a987a4168d",
    version: 'v3.1'
})

export async function getPosts() {
    return await api.posts
    .browse({
        limit: "all"
    })
    .catch(error => {
        console.error(error);
    })
}

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      }, {
        include: 'authors'
      })
      .catch(error => {
        console.error(error);
      });
  }
  