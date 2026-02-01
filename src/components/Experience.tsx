import { experiences } from "../data/experience";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    timelineOppositeContentClasses,

} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import StartIcon from "@mui/icons-material/Start";
import StarIcon from "@mui/icons-material/Star";

const getIcon = (index: number) => {
    const icons = [StartIcon, CodeIcon, WorkIcon, SchoolIcon, StarIcon];
    return icons[index % icons.length];
};

export default function Experience() {
    return (
        <section id="experience" className="w-full min-h-auto py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Experience</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12"></div>
            <Box className="w-full overflow-x-auto">
                <Timeline sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                    '& .MuiTimelineItem-root': {
                        marginBottom: '32px',
                        '&:last-child': {
                            marginBottom: 0,
                        }
                    }
                }}>
                    {experiences.map((exp, i) => (
                        <TimelineItem key={i}>
                            <TimelineOppositeContent color="textSecondary">
                               <Typography className="text-sm sm:text-base font-medium">
                                   {exp.period}
                               </Typography>
                               <Typography className="text-xs sm:text-sm text-gray-500 mt-1">
                                   {exp.company}
                               </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    color="primary"
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    {(() => {
                                        const IconComponent = getIcon(i);
                                        return <IconComponent />;
                                    })()}
                                </TimelineDot>
                                {i !== experiences.length - 1 && <TimelineConnector className="bg-gradient-to-b from-purple-600 to-purple-400" />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span" className="text-lg font-bold text-gray-900 hover:text-purple-600 transition-colors duration-300">
                                    {exp.role}
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
