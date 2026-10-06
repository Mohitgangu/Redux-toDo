import { useSelector } from "react-redux";

const Display = () => {
  const data = useSelector((state) => state.data);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Items List</h2>

      {!data || data.length === 0 ? (
        <p style={styles.emptyText}>No items added yet. Add one above!</p>
      ) : (
        <div style={styles.grid}>
          {data.map((item, index) => (
            <article key={index} style={styles.card}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

// Styling Object
const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
  },
  heading: {
    fontSize: "22px",
    color: "#333",
    marginBottom: "16px",
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    fontSize: "15px",
    fontStyle: "italic",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "16px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    borderLeft: "4px solid #ff4d4f", // Form button color matching
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    color: "#222",
    fontWeight: "600",
  },
  desc: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
    wordBreak: "break-word",
  },
};

export default Display;