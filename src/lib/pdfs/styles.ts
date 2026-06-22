import { StyleSheet } from "@react-pdf/renderer";

export const S = StyleSheet.create({
  page:        { padding: 48, backgroundColor: "#FFFFFF", fontFamily: "Helvetica" },
  gold:        { color: "#C9A227" },
  navy:        { color: "#0A0E2E" },
  purple:      { color: "#7C3AED" },
  slate:       { color: "#475569" },
  white:       { color: "#FFFFFF" },

  // Header band
  headerBand:  { backgroundColor: "#0A0E2E", marginHorizontal: -48, marginTop: -48, paddingHorizontal: 48, paddingVertical: 28, marginBottom: 28 },
  brand:       { fontSize: 9, color: "#C9A227", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 },
  docTitle:    { fontSize: 26, color: "#FFFFFF", fontFamily: "Helvetica-Bold" },
  docSubtitle: { fontSize: 11, color: "#94A3B8", marginTop: 5 },

  // Section headings
  h2:          { fontSize: 16, fontFamily: "Helvetica-Bold", color: "#0A0E2E", marginBottom: 6, marginTop: 18 },
  h3:          { fontSize: 12, fontFamily: "Helvetica-Bold", color: "#7C3AED", marginBottom: 4, marginTop: 12 },

  // Body text
  body:        { fontSize: 10, color: "#334155", lineHeight: 1.65 },
  small:       { fontSize: 9, color: "#64748B", lineHeight: 1.6 },

  // List items
  row:         { flexDirection: "row", marginBottom: 6, alignItems: "flex-start" },
  bullet:      { fontSize: 10, color: "#C9A227", marginRight: 8, marginTop: 1, fontFamily: "Helvetica-Bold" },
  itemText:    { fontSize: 10, color: "#334155", flex: 1, lineHeight: 1.6 },

  // Divider
  divider:     { borderBottomWidth: 1, borderBottomColor: "#E2E8F0", marginVertical: 14 },

  // Highlight box
  box:         { backgroundColor: "#F8F5FF", borderLeftWidth: 3, borderLeftColor: "#7C3AED", padding: 12, marginVertical: 10 },
  goldBox:     { backgroundColor: "#FEFBF0", borderLeftWidth: 3, borderLeftColor: "#C9A227", padding: 12, marginVertical: 10 },

  // Footer
  footer:      { position: "absolute", bottom: 28, left: 48, right: 48, flexDirection: "row", justifyContent: "space-between" },
  footerText:  { fontSize: 8, color: "#94A3B8" },

  // Tag pill
  tag:         { backgroundColor: "#F1F5F9", borderRadius: 4, paddingHorizontal: 8, paddingVertical: 3, marginRight: 6, marginBottom: 4 },
  tagText:     { fontSize: 8, color: "#475569" },
  tagRow:      { flexDirection: "row", flexWrap: "wrap", marginTop: 6 },

  // Tool card
  toolCard:    { backgroundColor: "#F8FAFC", borderWidth: 1, borderColor: "#E2E8F0", borderRadius: 6, padding: 12, marginBottom: 10 },
  toolName:    { fontSize: 11, fontFamily: "Helvetica-Bold", color: "#0A0E2E", marginBottom: 3 },
  toolPrice:   { fontSize: 9, color: "#C9A227", fontFamily: "Helvetica-Bold" },

  // Prompt card
  promptCard:  { borderLeftWidth: 2, borderLeftColor: "#E2E8F0", paddingLeft: 10, marginBottom: 10 },
  promptText:  { fontSize: 9.5, color: "#1E293B", fontFamily: "Helvetica-Oblique", lineHeight: 1.55 },
  promptLabel: { fontSize: 8, color: "#7C3AED", fontFamily: "Helvetica-Bold", marginBottom: 2 },

  // Number badge
  numBadge:    { width: 20, height: 20, backgroundColor: "#0A0E2E", borderRadius: 10, alignItems: "center", justifyContent: "center", marginRight: 10 },
  numText:     { fontSize: 9, color: "#FFFFFF", fontFamily: "Helvetica-Bold" },
});
