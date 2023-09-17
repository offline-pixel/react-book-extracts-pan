// htmlSanitizer.js

function sanitizeHTML(html) {
    // Define an array of allowed tags
    const allowedTags = [
        'p', 'a', 'abbr', 'acronym', 'address', 'area', 'b', 'bdi', 'bdo', 'big', 'blockquote', 'br', 'button',
        'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'ins', 'kbd', 'li', 'mark', 'ol', 'p', 'pre', 'q', 's',
        'samp', 'small', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul',
    ];      
  
    // Use the `replace` method to sanitize the HTML
    const sanitizedHTML = html.replace(/<[^>]*>/g, (match) => {
        // Extract the tag name from the match
        // const tagName = match.split(/[<>\/\s]+/)[1];
        const tagName = match.split(/[<>\\s]+/)[1];
    
        // Check if the tag is allowed
        if (allowedTags.includes(tagName)) {
            // Replace any attributes with a space
            return match.replace(/ [a-zA-Z-]+=["'][^"']*["']/g, '');
        }
  
        // If the tag is not allowed, replace with an empty string
        return '';
    });
    // console.log(sanitizedHTML)
  
    // Return the sanitized HTML
    return sanitizedHTML;
  }
  
  export default sanitizeHTML;
  