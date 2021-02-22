
function Article({
    title, 
    date ="January 1, 1970",
    preview,
    minutes
}){
    return(
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>

    )}
export default Article


// {minutes > 30 ? emojinum = minutes/10}

// for (i < emojinum, i += 🍱)
