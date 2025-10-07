export async function fetchRepos(username = 'Mattzoki') {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!res.ok) return [];
    const data = await res.json();
    return data
        .filter(r => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 6)
        .map(r => ({
            title: r.name,
            period: new Date(r.updated_at).getFullYear(),
            type: 'Frontend',
            tags: ['GitHub', r.language || ''],
            desc: r.description || 'No description provided.',
            links: [{ label: 'Repo', href: r.html_url }]
        }));
}