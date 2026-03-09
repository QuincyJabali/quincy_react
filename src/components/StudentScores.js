import React, { useState } from 'react';
// this is my new project
const StudentScores = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [students, setStudents] = useState([]);

  
 
  const addStudent = () => {
    if (name.trim() === '' || score === '') 
        return;

    const newStudent = {
      id: Date.now(), 
      id: Date.now(),
      name: name,
      score: parseFloat(score),
    };

    setStudents([...students, newStudent]);
    setName(''); 
    setName(''); 
    setScore('');
  };

  
  
  const deleteStudent = (id) => {
    setStudents(students.filter((students) => students.id !== id));
  };

 
  
  const totalStudents = students.length;

  let sum = 0 
  for(let i = 0 ; i < students.length; i++){
    sum += students[i].score;
  }
  let averageScore = 0 
  if(students.length>0){
    averageScore = sum / students.length;

  }
  else{
    averageScore = 0
  }

 

  

  
  let topStudent = null;
  if (students.length > 0) {
    topStudent = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > topStudent.score) {
        topStudent = students[i];
      }
    }
  }

  
  const scoreColor = (score) => {
    if (score >= 80) return 'green';
    if (score >= 50) return 'orange';
    return 'red';
  };

  return (
    <div className='section1'>
      <h1>Student Score Sheet</h1>

     
      
      <div className='section2'>
        <input className='nametag' type="text" placeholder="Student Name" value={name}  onChange={(e) => setName(e.target.value)} /> 
        <input className='scoretag' type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)}  />
        <button onClick={addStudent}>Add Student</button>
      </div>

      
      
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <>
         
          
          <div className='display'>
            <p><strong>Total Students:</strong> {totalStudents}</p>
            <p><strong>Class Average:</strong> {averageScore}</p>
            <p><b>Top Student:</b>{topStudent.name}({topStudent.score})</p>
          </div>

         
          
          <table className='mytable' border="1" >
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td style={{ color: scoreColor(student.score), fontWeight: 'bold' }}>
                    {student.score}
                  </td>
                  <td>{student.score >= 50 ? 'Pass' : 'Fail'}</td>
                  <td>
                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default StudentScores;
