
import db from './db'

export default (req, res)=>{
  db.query('SELECT * FROM student_tbl',(error,results) =>{
    if(error){
      res.status(500).json({error});

    }else{
      res.status(200).json({students: results});
    }
  });
};

/*export default function MyPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.query('SELECT * FROM student_tbl', (error, results) => {
      if (error) {
        console.error('Error executing database query:', error);
      } else {
        setData({students: results});
      }
    });
  }, []);
  console.log(data)
}


  export default (req,res)=>{
    db.query('SELECT * FROM student_tbl',(error,results) =>{
      if(error){
        res.status(500).json({error});

      }else{
        res.status(200).json({student: result});
      }
    });
  };
*/

