import React from 'react';


const Course = ({ courses }) => {
    
    return (    
    <div>
        <h1>Web Development Curriculum</h1>
        {courses.map(course =>
            <div key={course.id}>
                <h2>
                    {course.name}
                </h2>
                {course.parts.map(chapter =>
                    <p key={chapter.id}>
                        {chapter.name} {chapter.exercises}
                    </p>
                )}
                <h4 key={course.id}>
                    Number of exercises {course.parts.reduce((accum_val, curr_val) => accum_val + curr_val.exercises, 0)}
                </h4>
            </div>
        )}
    </div>
    )
}

export default Course
