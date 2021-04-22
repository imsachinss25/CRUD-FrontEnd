const getStudents = (data, setData)=>
{    
    fetch("http://localhost:8000/students")
      .then((response) => response.json())
      .then((data) => setData(data) );
}
export default getStudents;
