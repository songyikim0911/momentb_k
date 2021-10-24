package com.days.momentb.personalboard.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="personal_board")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class PersonalBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pbNo;

    private String pbContent;

    @CreationTimestamp
    private LocalDateTime pbRegDate;

    @UpdateTimestamp
    private LocalDateTime pbModDate;

    private String memId;

    public void change(String content){
        this.pbContent = pbContent;
    }

    @ElementCollection
    @CollectionTable(name="personal_board_tags")
    private Set<String> tags;


}
