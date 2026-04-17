import sidebarColors, { fontStyles } from '../colors';
import { borderRadius, spacing } from '../spacing';
import EagleEyeLoader from '../../src/components/utility/EagleEyeLoader';
import dragIcon from '../assets/drag.png'
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
                borderRadius: borderRadius.xl,
                border: `1px solid ${sidebarColors.border}`,
                backgroundColor: sidebarColors.backgroundSoft,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
            }}
            className={'outer-main-wrapper'}
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
                        flexWrap: 'nowrap', // 👈 force same line
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {rightComponent}


                        <div className="drag-handle ml-2" style={{ cursor: 'grab' }}>
                            <img src={dragIcon} width={20} />
                        </div>

                    </div>


                </div>


            </div>

            {/* title end */}

            {/* children start  */}
            <div
                className={'h-full overflow-y-auto'}
            >
                {isLoading ? loadingComponent : children}
            </div>
            {/* children end  */}
        </div>
    );
}