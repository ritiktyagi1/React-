import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc" imageUrl="https://talksport.com/wp-content/uploads/sites/5/2022/01/TALKSPORT-MORGAN.jpg?strip=all&quality=100&w=1200&h=800&crop=1"/>
                    </div>
                    <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
