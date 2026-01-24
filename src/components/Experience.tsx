import { experiences } from "../data/experience";
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

export default function Experience() {
    return (
        <section id="experience" className="w-full min-h-auto py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Experience</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12"></div>
            <Box className="w-full overflow-x-auto">
                <Timeline position="alternate">
                    {experiences.map((exp, i) => (
                        <TimelineItem key={i}>
                            <TimelineSeparator>
                                <TimelineDot 
                                    color="primary" 
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                                {i !== experiences.length - 1 && <TimelineConnector className="bg-gradient-to-b from-purple-600 to-purple-400" />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span" className="text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors duration-300">
                                    {exp.role}
                                </Typography>

                                <Typography className="text-sm sm:text-base text-gray-600 font-medium mt-1">
                                    {exp.company} • {exp.period}
                                </Typography>

                                <Typography className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                                    {exp.description}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </section>
    );
}
