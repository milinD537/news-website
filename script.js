const getNews = async (newsTopic) => {
    const newsContainer = document.getElementById("cardsContainer")
    const heroSection = document.getElementById("heroSection")

    // const india = document.getElementById("in")
    // const business = document.getElementById("business")
    // const science = document.getElementById("science")
    // const entertainment = document.getElementById("entertainment")
    // const technology = document.getElementById("technology")
    // const world = document.getElementById("world")
    // const sports = document.getElementById("sports")
    // const health = document.getElementById("health")

    newsContainer.innerHTML = `<span class="loader"></span>`
    heroSection.innerHTML = ``

    console.log(newsTopic)
    let topic = newsTopic
    if (!newsTopic) {
        topic = "in"
    }
    const topicArray = ["in", "business", "science", "entertainment", "technology", "world", "sports", "health"]
    for (const eachTopic of topicArray) {
        if (eachTopic === topic) {
            document.getElementById(eachTopic).style.fontWeight = "bold"
            document.getElementById(eachTopic).style.color = "#294AFA"

        } else {
            document.getElementById(eachTopic).style.fontWeight = "normal"
            document.getElementById(eachTopic).style.color = "#6D6D6D"

        }
    }
    const resp = await fetch(`https://vaxadapi.onrender.com/gnews/topic/${topic}`)
    const newsData = await resp.json()
    const news = newsData.news
    console.log(news)


    const slicedNews = newsData.news.slice(1)
    const mappedNews = slicedNews.map((item, idx) => {
        return item.img ? (
            `<div class="card" key=${(idx)}>
                <div class="imageContainer"><img src=${item.img[1]} alt=""></div>
                <div class="details">
                    <div class="publisher"><p>${item.source.name}</p></div>
                    <div class="time"><p>${item.time}</p></div>
                </div>
                <div class="title"><h2>${item.title}</h2></div>
                <a href=${item.link} class="readMoreLink" target="_blank">
                    <span>Read More</span>
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7188 0.987305H12.4734C11.5624 0.987305 10.6718 1.24893 9.90547 1.74248L9 2.32324L8.09453 1.74248C7.32899 1.24902 6.43737 0.986818 5.52656 0.987305H1.28125C0.952832 0.987305 0.6875 1.25264 0.6875 1.58106V12.1201C0.6875 12.4485 0.952832 12.7139 1.28125 12.7139H5.52656C6.4376 12.7139 7.32822 12.9755 8.09453 13.469L8.91836 13.9997C8.94248 14.0146 8.97031 14.0238 8.99814 14.0238C9.02598 14.0238 9.05381 14.0164 9.07793 13.9997L9.90176 13.469C10.6699 12.9755 11.5624 12.7139 12.4734 12.7139H16.7188C17.0472 12.7139 17.3125 12.4485 17.3125 12.1201V1.58106C17.3125 1.25264 17.0472 0.987305 16.7188 0.987305ZM5.52656 11.3779H2.02344V2.32324H5.52656C6.1834 2.32324 6.82168 2.51065 7.37275 2.86504L8.27822 3.4458L8.40625 3.5293V12.1016C7.52305 11.6266 6.53594 11.3779 5.52656 11.3779ZM15.9766 11.3779H12.4734C11.4641 11.3779 10.477 11.6266 9.59375 12.1016V3.5293L9.72178 3.4458L10.6272 2.86504C11.1783 2.51065 11.8166 2.32324 12.4734 2.32324H15.9766V11.3779ZM6.86436 4.69824H3.41689C3.34453 4.69824 3.28516 4.76133 3.28516 4.8374V5.67236C3.28516 5.74844 3.34453 5.81152 3.41689 5.81152H6.8625C6.93486 5.81152 6.99424 5.74844 6.99424 5.67236V4.8374C6.99609 4.76133 6.93672 4.69824 6.86436 4.69824ZM11.0039 4.8374V5.67236C11.0039 5.74844 11.0633 5.81152 11.1356 5.81152H14.5813C14.6536 5.81152 14.713 5.74844 14.713 5.67236V4.8374C14.713 4.76133 14.6536 4.69824 14.5813 4.69824H11.1356C11.0633 4.69824 11.0039 4.76133 11.0039 4.8374ZM6.86436 7.2959H3.41689C3.34453 7.2959 3.28516 7.35899 3.28516 7.43506V8.27002C3.28516 8.3461 3.34453 8.40918 3.41689 8.40918H6.8625C6.93486 8.40918 6.99424 8.3461 6.99424 8.27002V7.43506C6.99609 7.35899 6.93672 7.2959 6.86436 7.2959ZM14.5831 7.2959H11.1356C11.0633 7.2959 11.0039 7.35899 11.0039 7.43506V8.27002C11.0039 8.3461 11.0633 8.40918 11.1356 8.40918H14.5813C14.6536 8.40918 14.713 8.3461 14.713 8.27002V7.43506C14.7148 7.35899 14.6555 7.2959 14.5831 7.2959Z" fill="white"/>
                    </svg>
                        
                </a>
            </div>`
        ) : (``)
    })
    newsContainer.innerHTML = mappedNews.join("")

    heroSection.innerHTML = `<div class="left">
                                <h1>${news[0].title}</h1>
                                <div class="details">
                                    <span class="time">${news[0].time} </span> - <span class="publisher"> ${news[0].source.name}</span>
                                </div>
                                <a href=${news[0].link} class="heroLink" target="_blank">
                                    <span>Read More</span>
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7188 0.987305H12.4734C11.5624 0.987305 10.6718 1.24893 9.90547 1.74248L9 2.32324L8.09453 1.74248C7.32899 1.24902 6.43737 0.986818 5.52656 0.987305H1.28125C0.952832 0.987305 0.6875 1.25264 0.6875 1.58106V12.1201C0.6875 12.4485 0.952832 12.7139 1.28125 12.7139H5.52656C6.4376 12.7139 7.32822 12.9755 8.09453 13.469L8.91836 13.9997C8.94248 14.0146 8.97031 14.0238 8.99814 14.0238C9.02598 14.0238 9.05381 14.0164 9.07793 13.9997L9.90176 13.469C10.6699 12.9755 11.5624 12.7139 12.4734 12.7139H16.7188C17.0472 12.7139 17.3125 12.4485 17.3125 12.1201V1.58106C17.3125 1.25264 17.0472 0.987305 16.7188 0.987305ZM5.52656 11.3779H2.02344V2.32324H5.52656C6.1834 2.32324 6.82168 2.51065 7.37275 2.86504L8.27822 3.4458L8.40625 3.5293V12.1016C7.52305 11.6266 6.53594 11.3779 5.52656 11.3779ZM15.9766 11.3779H12.4734C11.4641 11.3779 10.477 11.6266 9.59375 12.1016V3.5293L9.72178 3.4458L10.6272 2.86504C11.1783 2.51065 11.8166 2.32324 12.4734 2.32324H15.9766V11.3779ZM6.86436 4.69824H3.41689C3.34453 4.69824 3.28516 4.76133 3.28516 4.8374V5.67236C3.28516 5.74844 3.34453 5.81152 3.41689 5.81152H6.8625C6.93486 5.81152 6.99424 5.74844 6.99424 5.67236V4.8374C6.99609 4.76133 6.93672 4.69824 6.86436 4.69824ZM11.0039 4.8374V5.67236C11.0039 5.74844 11.0633 5.81152 11.1356 5.81152H14.5813C14.6536 5.81152 14.713 5.74844 14.713 5.67236V4.8374C14.713 4.76133 14.6536 4.69824 14.5813 4.69824H11.1356C11.0633 4.69824 11.0039 4.76133 11.0039 4.8374ZM6.86436 7.2959H3.41689C3.34453 7.2959 3.28516 7.35899 3.28516 7.43506V8.27002C3.28516 8.3461 3.34453 8.40918 3.41689 8.40918H6.8625C6.93486 8.40918 6.99424 8.3461 6.99424 8.27002V7.43506C6.99609 7.35899 6.93672 7.2959 6.86436 7.2959ZM14.5831 7.2959H11.1356C11.0633 7.2959 11.0039 7.35899 11.0039 7.43506V8.27002C11.0039 8.3461 11.0633 8.40918 11.1356 8.40918H14.5813C14.6536 8.40918 14.713 8.3461 14.713 8.27002V7.43506C14.7148 7.35899 14.6555 7.2959 14.5831 7.2959Z" fill="white"/>
                                    </svg>
                                </a>
                                
                            </div>
                            <div class="right">
                                <img src=${news[0].img[1]} alt="">
                            </div>`
}
getNews("in")

const searchNews = async (newsTerm) => {
    const newsContainer = document.getElementById("cardsContainer")
    const heroSection = document.getElementById("heroSection")

    newsContainer.innerHTML = `<span class="loader"></span>`
    heroSection.innerHTML = ``

    const resp = await fetch(`https://vaxadapi.onrender.com/gnews/search/${newsTerm}`)
    const newsData = await resp.json()
    const news = newsData.news
    console.log(news)


    const slicedNews = newsData.news.slice(1)
    const mappedNews = slicedNews.map((item, idx) => {
        return item.img ? (
            `<div class="card" key=${(idx)}>
                <div class="imageContainer"><img src=${item.img[1]} alt=""></div>
                <div class="details">
                    <div class="publisher"><p>${item.source.name}</p></div>
                    <div class="time"><p>${item.time}</p></div>
                </div>
                <div class="title"><h2>${item.title}</h2></div>
                <a href=${item.link} class="readMoreLink"  target="_blank">
                    <span>Read More</span>
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7188 0.987305H12.4734C11.5624 0.987305 10.6718 1.24893 9.90547 1.74248L9 2.32324L8.09453 1.74248C7.32899 1.24902 6.43737 0.986818 5.52656 0.987305H1.28125C0.952832 0.987305 0.6875 1.25264 0.6875 1.58106V12.1201C0.6875 12.4485 0.952832 12.7139 1.28125 12.7139H5.52656C6.4376 12.7139 7.32822 12.9755 8.09453 13.469L8.91836 13.9997C8.94248 14.0146 8.97031 14.0238 8.99814 14.0238C9.02598 14.0238 9.05381 14.0164 9.07793 13.9997L9.90176 13.469C10.6699 12.9755 11.5624 12.7139 12.4734 12.7139H16.7188C17.0472 12.7139 17.3125 12.4485 17.3125 12.1201V1.58106C17.3125 1.25264 17.0472 0.987305 16.7188 0.987305ZM5.52656 11.3779H2.02344V2.32324H5.52656C6.1834 2.32324 6.82168 2.51065 7.37275 2.86504L8.27822 3.4458L8.40625 3.5293V12.1016C7.52305 11.6266 6.53594 11.3779 5.52656 11.3779ZM15.9766 11.3779H12.4734C11.4641 11.3779 10.477 11.6266 9.59375 12.1016V3.5293L9.72178 3.4458L10.6272 2.86504C11.1783 2.51065 11.8166 2.32324 12.4734 2.32324H15.9766V11.3779ZM6.86436 4.69824H3.41689C3.34453 4.69824 3.28516 4.76133 3.28516 4.8374V5.67236C3.28516 5.74844 3.34453 5.81152 3.41689 5.81152H6.8625C6.93486 5.81152 6.99424 5.74844 6.99424 5.67236V4.8374C6.99609 4.76133 6.93672 4.69824 6.86436 4.69824ZM11.0039 4.8374V5.67236C11.0039 5.74844 11.0633 5.81152 11.1356 5.81152H14.5813C14.6536 5.81152 14.713 5.74844 14.713 5.67236V4.8374C14.713 4.76133 14.6536 4.69824 14.5813 4.69824H11.1356C11.0633 4.69824 11.0039 4.76133 11.0039 4.8374ZM6.86436 7.2959H3.41689C3.34453 7.2959 3.28516 7.35899 3.28516 7.43506V8.27002C3.28516 8.3461 3.34453 8.40918 3.41689 8.40918H6.8625C6.93486 8.40918 6.99424 8.3461 6.99424 8.27002V7.43506C6.99609 7.35899 6.93672 7.2959 6.86436 7.2959ZM14.5831 7.2959H11.1356C11.0633 7.2959 11.0039 7.35899 11.0039 7.43506V8.27002C11.0039 8.3461 11.0633 8.40918 11.1356 8.40918H14.5813C14.6536 8.40918 14.713 8.3461 14.713 8.27002V7.43506C14.7148 7.35899 14.6555 7.2959 14.5831 7.2959Z" fill="white"/>
                    </svg>
                        
                </a>
            </div>`
        ) : (``)
    })
    newsContainer.innerHTML = mappedNews.join("")

    heroSection.innerHTML = `<div class="left">
                                <h1>${news[0].title}</h1>
                                <div class="details">
                                    <span class="time">${news[0].time} </span> - <span class="publisher"> ${news[0].source.name}</span>
                                </div>
                                <a href=${news[0].link} class="heroLink" target="_blank">
                                    <span>Read More</span>
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7188 0.987305H12.4734C11.5624 0.987305 10.6718 1.24893 9.90547 1.74248L9 2.32324L8.09453 1.74248C7.32899 1.24902 6.43737 0.986818 5.52656 0.987305H1.28125C0.952832 0.987305 0.6875 1.25264 0.6875 1.58106V12.1201C0.6875 12.4485 0.952832 12.7139 1.28125 12.7139H5.52656C6.4376 12.7139 7.32822 12.9755 8.09453 13.469L8.91836 13.9997C8.94248 14.0146 8.97031 14.0238 8.99814 14.0238C9.02598 14.0238 9.05381 14.0164 9.07793 13.9997L9.90176 13.469C10.6699 12.9755 11.5624 12.7139 12.4734 12.7139H16.7188C17.0472 12.7139 17.3125 12.4485 17.3125 12.1201V1.58106C17.3125 1.25264 17.0472 0.987305 16.7188 0.987305ZM5.52656 11.3779H2.02344V2.32324H5.52656C6.1834 2.32324 6.82168 2.51065 7.37275 2.86504L8.27822 3.4458L8.40625 3.5293V12.1016C7.52305 11.6266 6.53594 11.3779 5.52656 11.3779ZM15.9766 11.3779H12.4734C11.4641 11.3779 10.477 11.6266 9.59375 12.1016V3.5293L9.72178 3.4458L10.6272 2.86504C11.1783 2.51065 11.8166 2.32324 12.4734 2.32324H15.9766V11.3779ZM6.86436 4.69824H3.41689C3.34453 4.69824 3.28516 4.76133 3.28516 4.8374V5.67236C3.28516 5.74844 3.34453 5.81152 3.41689 5.81152H6.8625C6.93486 5.81152 6.99424 5.74844 6.99424 5.67236V4.8374C6.99609 4.76133 6.93672 4.69824 6.86436 4.69824ZM11.0039 4.8374V5.67236C11.0039 5.74844 11.0633 5.81152 11.1356 5.81152H14.5813C14.6536 5.81152 14.713 5.74844 14.713 5.67236V4.8374C14.713 4.76133 14.6536 4.69824 14.5813 4.69824H11.1356C11.0633 4.69824 11.0039 4.76133 11.0039 4.8374ZM6.86436 7.2959H3.41689C3.34453 7.2959 3.28516 7.35899 3.28516 7.43506V8.27002C3.28516 8.3461 3.34453 8.40918 3.41689 8.40918H6.8625C6.93486 8.40918 6.99424 8.3461 6.99424 8.27002V7.43506C6.99609 7.35899 6.93672 7.2959 6.86436 7.2959ZM14.5831 7.2959H11.1356C11.0633 7.2959 11.0039 7.35899 11.0039 7.43506V8.27002C11.0039 8.3461 11.0633 8.40918 11.1356 8.40918H14.5813C14.6536 8.40918 14.713 8.3461 14.713 8.27002V7.43506C14.7148 7.35899 14.6555 7.2959 14.5831 7.2959Z" fill="white"/>
                                    </svg>
                                </a>
                                
                            </div>
                            <div class="right">
                                <img src=${news[0].img[1]} alt="">
                            </div>`
}
const searchInput = document.getElementById("search")
function getSearch() {
    if (searchInput.value.length > 2) {
        searchNews(searchInput.value)
    }
}