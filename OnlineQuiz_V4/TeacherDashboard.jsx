import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { model } from "../api/gemini";
function TeacherDashboard() {
const [students, setStudents] = useState([]);

const leaderboard = [...students]
  .sort((a,b)=>{

    const scoreA =
    parseInt(
      String(a.score).split("/")[0]
    );

    const scoreB =
    parseInt(
      String(b.score).split("/")[0]
    );

    return scoreB - scoreA;

  })
  .slice(0,5);

const totalAttempts = students.length;

const bestScore = students.length
? Math.max(
    ...students.map(item =>
      parseInt(
        String(item.score).split("/")[0]
      )
    )
  )
: 0;

const averageScore = students.length
? (
    students.reduce(
      (sum,item)=>
        sum +
        parseInt(
          String(item.score).split("/")[0]
        ),
      0
    )
    /
    students.length
  ).toFixed(1)
: 0;

const [homework, setHomework] = useState("");
const [uploadedFile, setUploadedFile] =
useState(null);
const [generatedQuiz, setGeneratedQuiz] =
useState([]);
const [pdfText, setPdfText] =
useState("");
  const [homeworkList, setHomeworkList] = useState([]);

  useEffect(() => {

    const scoreData =
      JSON.parse(localStorage.getItem("scores")) || [];

    const hwData =
      JSON.parse(localStorage.getItem("homework")) || [];

    setStudents(scoreData);
    setHomeworkList(hwData);

  }, []);

  const assignHomework = () => {

    if (!homework.trim()) return;

    const updated = [
      ...homeworkList,
      {
        title: homework,
        date: new Date().toLocaleDateString()
      }
    ];

    localStorage.setItem(
      "homework",
      JSON.stringify(updated)
    );

    setHomeworkList(updated);
    setHomework("");

    alert("Homework Assigned Successfully");
  };

  const downloadCSV = () => {

    let csv =
      "Student,Subject,Score\n";

    students.forEach((item) => {

      csv +=
        `${item.name || "Student"},${item.subject || ""},${item.score || ""}\n`;

    });

    const blob = new Blob(
      [csv],
      { type: "text/csv" }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "quiz-report.csv";
    a.click();
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#6a5cff,#8b5cf6)"
      }}
    >

      <div
        style={{
          background: "white",
          borderRadius: "25px",
          padding: "30px"
        }}
      >

        <h1>
          👨‍🏫 Teacher Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <div
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "#f5f5f5"
            }}
          >
           <h2>{totalAttempts}</h2>
            <p>Total Quiz Attempts</p>
          </div>

          <div
  style={{
    padding: "20px",
    borderRadius: "20px",
    background: "#f5f5f5"
  }}
>
  <h2>{averageScore}</h2>
  <p>Average Score</p>
</div>

<div
  style={{
    padding: "20px",
    borderRadius: "20px",
    background: "#f5f5f5"
  }}
>
  <h2>{bestScore}</h2>
  <p>Best Score</p>
</div>

<div
  style={{
    padding: "20px",
    borderRadius: "20px",
    background: "#f5f5f5"
  }}
>
  <h2>{homeworkList.length}</h2>
  <p>Total Homework</p>
</div>

        </div>
<h2 style={{ marginTop: "40px" }}>
  📄 Upload Notes
</h2>

<input
  type="file"
  accept=".pdf,.txt,.doc,.docx"
  onChange={(e)=>{

    const file = e.target.files[0];
if(file){

  setUploadedFile(file);

  setPdfText(
    "PDF uploaded successfully"
  );

}

  }}
/>
{
  uploadedFile && (
    <div
      style={{
        marginTop:"10px",
        padding:"10px",
        background:"#f5f5f5",
        borderRadius:"10px"
      }}
    >
      📄 {uploadedFile.name}
    </div>
  )
}

  {
  uploadedFile && (

    <button
      onClick={async () => {

        try {

  const result =
    await model.generateContent(
      `Generate 10 MCQ quiz questions from:

${pdfText}`
    );

  const response =
    result.response.text();

  alert(response);

}catch (error) {

  console.log(error);

  alert(error.message);

}


      }}
      style={{
        marginTop:"15px",
        padding:"12px 20px",
        border:"none",
        borderRadius:"12px",
        background:"#6a5cff",
        color:"white",
        cursor:"pointer"
      }}
    >
      🧠 Generate Quiz
    </button>

  )
}

        <h2 style={{ marginTop: "40px" }}>
          Assign Homework
        </h2>

        <input
          value={homework}
          onChange={(e) =>
            setHomework(e.target.value)
          }
          placeholder="Enter homework"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            marginTop: "10px"
          }}
        />

        <button
          onClick={assignHomework}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            background: "#6a5cff",
            color: "white",
            cursor: "pointer"
          }}
        >
          Assign Homework
        </button>

        <h2 style={{ marginTop: "40px" }}>
          Homework List
        </h2>

        {homeworkList.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "10px"
            }}
          >
            {item.title}
          </div>

        ))}
<h2 style={{ marginTop: "40px" }}>
🏆 Leaderboard
</h2>

{
leaderboard.length === 0 ?

<p>No scores yet.</p>

:

leaderboard.map((item,index)=>(

<div
key={index}
style={{
background:"#f5f5f5",
padding:"15px",
borderRadius:"12px",
marginBottom:"10px"
}}
>

#{index+1}

{" "}

{item.name || "Student"}

{" - "}

{item.score}

</div>

))
}
        <h2 style={{ marginTop: "40px" }}>
          Student Results
        </h2>

        {students.length === 0 ? (

          <p>No quiz attempts yet.</p>

        ) : (

          students.map((item, index) => (

            <div
              key={index}
              style={{
                background: "#f5f5f5",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "10px"
              }}
            >
              {item.name || "Student"} —
              {" "}
              {item.subject}
              {" "}
              —
              {" "}
              {item.score}
            </div>

          ))

        )}

        <button
          onClick={downloadCSV}
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            background: "#10b981",
            color: "white",
            cursor: "pointer"
          }}
        >
          📥 Download Report
        </button>

      </div>

    </div>

  );

}

export default TeacherDashboard;