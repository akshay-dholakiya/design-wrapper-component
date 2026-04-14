import sidebarColors, { fontStyles } from '../colors';
import { borderRadius, spacing } from '../spacing';
import EagleEyeLoader from '../../src/components/utility/EagleEyeLoader';

export default function OuterWrapper({
    title,
    rightComponent = null,
    children = null,
    isLoading = false,
    loadingComponent = <EagleEyeLoader />,
}) {

    return (
        <div
            style={{

                padding: spacing.xl,
                backgroundColor: sidebarColors.background,
                borderRadius: borderRadius.xl,
                border: `1px solid ${sidebarColors.border}`,
                backgroundColor: sidebarColors.backgroundSoft,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
            }}
        >
            {/* title start */}

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: spacing.lg,
                    marginLeft: `-${spacing.lg}`,
                    marginRight: `-${spacing.lg}`,
                    paddingLeft: spacing.lg,
                    paddingRight: spacing.lg,
                    paddingBottom: spacing.lg,
                    marginBottom: spacing.lg,
                    borderBottom: `1px solid ${sidebarColors.border}`,
                }}
            >
                <div
                    style={{
                        ...fontStyles.heading4,
                        color: sidebarColors.textPrimary,
                        fontWeight: 700,
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: spacing.md,

                        flexWrap: 'wrap',
                    }}
                >
                    {rightComponent}
                </div>
            </div>

            {/* title end */}

            {/* children start  */}
            <div

            >
                {isLoading ? loadingComponent : children}
            </div>
            {/* children end  */}
        </div>
    );
}