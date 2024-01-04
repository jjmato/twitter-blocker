setInterval(() => { 
    function fromHTML(html, trim = true) { 
        // Process the HTML string. 
        html = trim ? html : html.trim(); 
        if (!html) return null; 
       
        // Then set up a new template element. 
        const template = document.createElement('template'); 
        template.innerHTML = html; 
        const result = template.content.children; 
       
        // Then return either an HTMLElement or HTMLCollection, 
        // based on whether the input HTML had one or more roots. 
        if (result.length === 1) return result[0]; 
        return result; 
      } 
     
    const blockTemplate = `<div data-testid="block-button"> 
            <button> 
                <svg viewBox="0 0 24 24" aria-hidden="true" style="color: red" 
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-1q142lx"> 
                    <g> 
                        <path 
                            d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"> 
                        </path> 
                    </g> 
                </svg></button> 
        </div>`; 
     
    document.querySelectorAll('[data-testid="caret"]').forEach((caret) => { 
     
        if (caret.parentElement.querySelector('[data-testid="block-button"]')) return 
     
        const blockElement = fromHTML(blockTemplate); 
        blockElement?.addEventListener('click',() => { 
            caret.click(); 
            const id = setTimeout(() => { 
                document.querySelector('[data-testid="block"]').click() 
                clearTimeout(id) 
            }, 500); 
        }) 
        caret.parentElement.style.cssText += 'display: felx; flex-direction: row; gap: .5rem' 
        caret.parentElement.prepend(blockElement); 
    }) 
}, 33);