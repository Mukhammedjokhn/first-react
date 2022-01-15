import React from 'react';
import TableItem from '../components/TableItem';
import TableHeader from '../components/TableHeader';


function TableLIst({ posts, title }) {
    return (
        <>
            <h5 className='text-center'>{title}</h5>
            <table className='table table-striped'>
                <TableHeader />
                <tbody>
                    {
                        posts.map(post => (
                            <TableItem post={post} key={post.id} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableLIst
