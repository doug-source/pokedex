export type AppTheme = {
    screen: {
        medium: string;
        wide: string;
    };
    body: {
        bg: {
            dark: string;
            light: string;
        };
        width: string;
        height: string;
        index: {
            padding: string;
        };
        info: {
            padding: string;
        };
    };
    header: {
        width: string;
        fontSize: string;
        padding: {
            block: string;
        };
        letterSpacing: string;
        boxShadow: string;
        bg: string;
        color: string;
        zIndex: number;
        position: {
            top: string;
        };
        medium: {
            fontSize: string;
        };
        wide: {
            fontSize: string;
            padding: {
                top: string;
                left: string;
                bottom: string;
                right: string;
            };
        };
    };
    pokemon: {
        card: {
            borderRadius: string;
            imgBox: {
                padding: {
                    inline: string;
                    top: string;
                    bottom: string;
                };
                minWidth: string;
                medium: {
                    minWidth: string;
                    padding: {
                        inline: string;
                        top: string;
                        bottom: string;
                    };
                };
                wide: {
                    minWidth: string;
                };
            };
            number: {
                fontSize: string;
                top: string;
                padding: {
                    inline: string;
                };
                medium: {
                    fontSize: string;
                };
                wide: {
                    fontSize: string;
                };
            };
            name: {
                fontWeight: number;
                fontSize: string;
                textTransform: 'capitalize' | 'uppercase';
                position: {
                    top: string;
                };
                padding: {
                    inline: string;
                };
                medium: {
                    fontSize: string;
                };
                wide: {
                    fontSize: string;
                };
            };
            back: {
                position: {
                    top: string;
                    left: string;
                    bottom: string;
                    right: string;
                };
                borderRadius: string;
                bg: {
                    dark: string;
                    light: string;
                };
                zIndex: number;
            };
        };
    };
    info: {
        padding: {
            inline: string;
            top: string;
            bottom: string;
        };
        minWidth: string;
        medium: {
            minWidth: string;
        };
        wide: {
            minWidth: string;
        };
        back: {
            bg: {
                light: string;
                dark: string;
            };
            position: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            borderRadius: {
                bottom: {
                    right: string;
                    left: string;
                };
            };
            zIndex: number;
        };
        resturnSvg: {
            position: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            width: string;
            height: string;
            zIndex: number;
        };
        headingBox: {
            width: string;
            position: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
        };
        headingOne: {
            textTransform: 'capitalize' | 'uppercase';
            fontSize: string;
            fontWeight: string;
        };
        typeBox: {
            fontSize: string;
            fontWeight: string;
            gap: string;
            minWidth: string;
        };
        typeLabel: {
            borderRadius: string;
            padding: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            before: {
                size: string;
                zIndex: number;
                position: {
                    top: string;
                    right: string;
                    bottom: string;
                    left: string;
                };
                bgSize: string;
            };
        };
    };
    list: {
        medium: {
            maxWidth: string;
            gap: string;
        };
        wide: {
            maxWidth: string;
            gap: string;
        };
    };
    lines: {
        label: {
            textTransform: 'uppercase' | 'capitalize';
            width: string;
        };
        width: string;
        gap: string;
    };
    tabList: {
        btnText: {
            borderBottom: {
                width: string;
                color: string;
            };
            padding: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            fontWeight: string;
            textTransform: 'uppercase' | 'capitalize';
        };
        btn: {
            fontSize: string;
            padding: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
        };
        padding: {
            top: string;
            right: string;
            bottom: string;
            left: string;
        };
        after: {
            position: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            height: string;
            bg: string;
            zIndex: number;
        };
    };
    tabPanel: {
        padding: {
            top: string;
            right: string;
            bottom: string;
            left: string;
        };
    };
    evolutions: {
        padding: {
            inline: string;
            top: string;
            bottom: string;
        };
        minWidth: string;
        medium: {
            minWidth: string;
        };
        wide: {
            minWidth: string;
        };
    };
    inputFilter: {
        position: {
            top: string;
            right: string;
            bottom: string;
            left: string;
        };
        width: string;
        zIndex: number;
        input: {
            borderRadius: string;
            borderWidth: string;
            borderColor: string;
            padding: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            textIndent: string;
            width: string;
            outline: string;
        };
        icon: {
            position: {
                top: string;
                right: string;
                bottom: string;
                left: string;
            };
            width: string;
            path: {
                fill: string;
            };
        };
    };
    home: {
        inputFilter: {
            marginTop: string;
        };
    };
    arrow: {
        size: string;
        borderWidth: string;
        borderColor: string;
        borderLeft: string;
        borderTop: string;
        disabled: {
            borderColor: string;
        };
    };
    stretcher: {
        position: {
            top: string;
            right: string;
            bottom: string;
            left: string;
        };
        padding: {
            inline: string;
        };
    };
};
